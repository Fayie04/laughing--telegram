(function () {
  "use strict";

  const TESTS = window.IELTS_TESTS || [];
  const STORE_KEY = "ielts-practice-v1";
  const MODULES = ["listening", "reading", "writing", "speaking", "results"];
  const LABELS = { listening: "Listening", reading: "Reading", writing: "Writing", speaking: "Speaking", results: "Results" };
  const BANDS = [4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9];

  const app = document.getElementById("app");
  const nav = document.getElementById("module-nav");
  const timerEl = document.getElementById("timer");

  // ---------- storage ----------
  let store = {};
  try { store = JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch (e) { store = {}; }
  function save() { try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ } }
  function stateFor(testId) {
    store[testId] = store[testId] || {};
    const s = store[testId];
    MODULES.slice(0, 4).forEach(m => { s[m] = s[m] || {}; });
    s.listening.answers = s.listening.answers || {};
    s.reading.answers = s.reading.answers || {};
    s.writing.ratings = s.writing.ratings || { t1: {}, t2: {} };
    s.speaking.ratings = s.speaking.ratings || {};
    return s;
  }

  // ---------- helpers ----------
  const esc = str => String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const letter = i => String.fromCharCode(65 + i);
  const norm = v => String(v || "").toLowerCase().replace(/[.,;:!?"']/g, "").replace(/\s+/g, " ").trim().replace(/^(the|a|an) /, "");
  const wordCount = t => (t.trim().match(/\S+/g) || []).length;
  const fmtTime = s => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  const roundHalf = x => Math.round(x * 2) / 2;
  function overallRound(x) {
    const f = x - Math.floor(x);
    if (f < 0.25) return Math.floor(x);
    if (f < 0.75) return Math.floor(x) + 0.5;
    return Math.ceil(x);
  }

  // Raw-score tables (out of 40) adapted from published IELTS conversion guides.
  const LISTENING_TABLE = [[39, 9], [37, 8.5], [35, 8], [32, 7.5], [30, 7], [26, 6.5], [23, 6], [18, 5.5], [16, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]];
  const READING_TABLE = [[39, 9], [37, 8.5], [35, 8], [33, 7.5], [30, 7], [27, 6.5], [23, 6], [19, 5.5], [15, 5], [13, 4.5], [10, 4], [8, 3.5], [6, 3], [4, 2.5], [2, 2], [1, 1], [0, 0]];
  function toBand(raw, total, table) {
    const scaled = Math.round((raw / total) * 40);
    for (const [min, band] of table) if (scaled >= min) return band;
    return 0;
  }

  function isCorrect(q, given) {
    if (q.type === "gap") return q.answer.some(a => norm(a) === norm(given));
    return String(given || "") === q.answer;
  }
  function answerText(q) {
    if (q.type === "mcq") return `${q.answer}) ${q.options[q.answer.charCodeAt(0) - 65]}`;
    if (q.type === "gap") return q.answer[0];
    return q.answer;
  }

  // Two-step confirm inside the page: first click arms the button, second click runs the action.
  function confirmClick(btn, question, action) {
    if (btn.dataset.armed) { action(); return; }
    const original = btn.textContent;
    btn.dataset.armed = "1";
    btn.textContent = question + " Click again to confirm";
    setTimeout(() => { if (document.body.contains(btn)) { delete btn.dataset.armed; btn.textContent = original; } }, 4000);
  }

  // ---------- timer ----------
  let timerHandle = null;
  function stopTimer() { clearInterval(timerHandle); timerHandle = null; timerEl.hidden = true; }
  function startTimer(deadline, onExpire) {
    stopTimer();
    timerEl.hidden = false;
    const tick = () => {
      const left = (deadline - Date.now()) / 1000;
      timerEl.textContent = "⏱ " + fmtTime(left);
      timerEl.classList.toggle("low", left < 300);
      if (left <= 0) { stopTimer(); onExpire(); }
    };
    tick();
    timerHandle = setInterval(tick, 1000);
  }

  // ---------- speech ----------
  const synth = window.speechSynthesis;
  function voices() {
    if (!synth) return [];
    const all = synth.getVoices();
    const en = all.filter(v => /^en/i.test(v.lang));
    return en.length ? en : all;
  }
  if (synth) synth.onvoiceschanged = () => {};
  function speakLines(lines, onDone) {
    if (!synth) { onDone && onDone(); return; }
    synth.cancel();
    const vs = voices();
    const female = vs.find(v => /female|samantha|karen|zira|susan|serena|moira|tessa|libby|sonia/i.test(v.name)) || vs[0];
    const male = vs.find(v => v !== female && /male|daniel|david|george|alex|ryan|guy|arthur/i.test(v.name)) || vs.find(v => v !== female) || vs[0];
    lines.forEach(([who, text], i) => {
      const u = new SpeechSynthesisUtterance(text);
      u.voice = who === "F" ? female : male;
      u.pitch = who === "F" ? 1.15 : 0.85;
      u.rate = 0.95;
      if (i === lines.length - 1) u.onend = () => onDone && onDone();
      synth.speak(u);
    });
  }
  function stopSpeech() { if (synth) synth.cancel(); }

  // ---------- question rendering ----------
  function renderQuestion(q, num, given, submitted) {
    const ok = submitted && isCorrect(q, given);
    const cls = submitted ? (ok ? "correct" : "wrong") : "";
    let body = "";
    const name = `q-${q.id}`;
    if (q.type === "mcq") {
      body = q.options.map((o, i) => `
        <label class="opt"><input type="radio" name="${name}" value="${letter(i)}" ${given === letter(i) ? "checked" : ""} ${submitted ? "disabled" : ""}>
        <strong>${letter(i)}</strong> ${esc(o)}</label>`).join("");
    } else if (q.type === "tfng" || q.type === "ynng") {
      const opts = q.type === "tfng" ? ["TRUE", "FALSE", "NOT GIVEN"] : ["YES", "NO", "NOT GIVEN"];
      body = `<select name="${name}" ${submitted ? "disabled" : ""}><option value="">— choose —</option>${opts.map(o => `<option ${given === o ? "selected" : ""}>${o}</option>`).join("")}</select>`;
    } else {
      body = `<input type="text" name="${name}" value="${esc(given || "")}" autocomplete="off" spellcheck="false" ${submitted ? "disabled" : ""}>`;
    }
    const fb = submitted ? `<div class="feedback ${ok ? "ok" : "bad"}">${ok ? "✓ Correct" : `✗ Answer: <strong>${esc(answerText(q))}</strong>`}</div>` : "";
    return `<div class="q ${cls}" data-qid="${q.id}"><div><span class="q-num">${num}.</span>${esc(q.prompt)}</div><div style="margin-top:6px">${body}</div>${fb}</div>`;
  }
  // One delegated listener; each objective module points it at its own answers object.
  let currentAnswers = null;
  function bindAnswers(container, answers) { currentAnswers = answers; }
  const onAnswer = e => {
    const t = e.target;
    if (!currentAnswers || !t.name || !t.name.startsWith("q-")) return;
    currentAnswers[t.name.slice(2)] = t.value;
    save();
  };
  app.addEventListener("input", onAnswer);
  app.addEventListener("change", onAnswer);
  function gradeObjective(questions, mod, table) {
    let raw = 0;
    questions.forEach(q => { if (isCorrect(q, mod.answers[q.id])) raw++; });
    mod.submitted = true;
    mod.raw = raw;
    mod.total = questions.length;
    mod.band = toBand(raw, questions.length, table);
    delete mod.deadline;
    save();
  }

  // ---------- views ----------
  function renderHome() {
    nav.hidden = true;
    stopTimer();
    const cards = TESTS.map(t => {
      const s = stateFor(t.id);
      const row = m => {
        const b = s[m].band;
        return `<li><span>${LABELS[m]}</span><span class="muted">${b != null ? "Band " + b : "Not done"}</span></li>`;
      };
      const ov = overall(s);
      return `<div class="panel card">
        <h3>${esc(t.title)}</h3>
        <ul class="modules">${["listening", "reading", "writing", "speaking"].map(row).join("")}</ul>
        <p>${ov != null ? `Overall: <strong>Band ${ov}</strong>` : '<span class="muted">Complete all four modules for an overall band.</span>'}</p>
        <div class="row">
          <a class="btn primary" href="#${t.id}-listening">Start</a>
          <a class="btn" href="#${t.id}-results">Results</a>
          <button data-reset="${t.id}">Reset</button>
        </div>
      </div>`;
    }).join("");
    app.innerHTML = `
      <div class="panel">
        <h1 style="margin-top:0">IELTS Academic Practice Exams</h1>
        <p>Full-format practice tests covering all four modules. Answers are marked automatically for Listening and Reading; Writing and Speaking include model answers and band-descriptor self-assessment.</p>
        <ul class="small">
          <li><strong>Listening</strong> (≈30 min) — 4 sections, audio played by your browser's speech engine. In exam mode each recording plays once.</li>
          <li><strong>Reading</strong> (60 min) — 3 passages: True/False/Not Given, Yes/No/Not Given, multiple choice and gap-fill.</li>
          <li><strong>Writing</strong> (60 min) — Task 1 (chart report, 150+ words) and Task 2 (essay, 250+ words).</li>
          <li><strong>Speaking</strong> (11–14 min) — Parts 1–3 with a spoken examiner, cue card timer and optional recording.</li>
        </ul>
      </div>
      <div class="grid">${cards}</div>`;
    app.querySelectorAll("[data-reset]").forEach(b => b.addEventListener("click", () => {
      confirmClick(b, "Clear all answers?", () => { delete store[b.dataset.reset]; save(); renderHome(); });
    }));
  }

  function renderNav(test, current) {
    nav.hidden = false;
    nav.innerHTML = MODULES.map(m => `<a href="#${test.id}-${m}" class="${m === current ? "active" : ""}">${LABELS[m]}</a>`).join("");
  }

  function nextLink(test, mod) {
    const i = MODULES.indexOf(mod);
    const next = MODULES[i + 1];
    return next ? `<a class="btn primary" href="#${test.id}-${next}">Continue to ${LABELS[next]} →</a>` : "";
  }

  // ----- Listening -----
  function renderListening(test) {
    const s = stateFor(test.id).listening;
    const secs = test.listening.sections;
    const all = secs.flatMap(sec => sec.questions);
    s.played = s.played || {};
    let n = 0;
    const html = secs.map((sec, si) => {
      const qs = sec.questions.map(q => renderQuestion(q, ++n, s.answers[q.id], s.submitted)).join("");
      const transcript = s.submitted ? `<details><summary>Show transcript</summary><div class="transcript">${sec.transcript.map(([w, t]) => `<p><strong>${w === "F" ? "Woman" : "Man"}:</strong> ${esc(t)}</p>`).join("")}</div></details>` : "";
      return `<div class="panel">
        <h2 style="margin-top:0">${esc(sec.title)}</h2>
        <p class="muted">${esc(sec.intro)}</p>
        <div class="row">
          <button class="primary" data-play="${si}">▶ Play recording</button>
          <button data-stop>■ Stop</button>
          <span class="small muted" data-status="${si}"></span>
        </div>
        ${transcript}
        <div style="margin-top:12px">${qs}</div>
      </div>`;
    }).join("");

    const result = s.submitted ? `<div class="panel"><h2 style="margin-top:0">Listening score: ${s.raw}/${s.total}</h2><p>Estimated band: <span class="band">${s.band}</span></p>${nextLink(test, "listening")}</div>` : "";
    app.innerHTML = `
      ${result}
      <div class="panel">
        <h1 style="margin-top:0">Listening</h1>
        <p>Read the questions, then press play. Answer as you listen. For gap-fill, write NO MORE THAN TWO WORDS AND/OR A NUMBER.</p>
        ${synth ? "" : '<p class="notice">Your browser does not support speech synthesis, so transcripts are shown instead.</p>'}
        <label class="small"><input type="checkbox" id="practice-mode" ${s.practice ? "checked" : ""}> Practice mode (allow replays)</label>
      </div>
      ${html}
      ${s.submitted ? "" : '<div class="row"><button class="primary" id="submit">Submit Listening answers</button></div>'}`;

    if (!synth && !s.submitted) {
      secs.forEach((sec, si) => {
        const st = app.querySelector(`[data-status="${si}"]`);
        st.closest(".panel").insertAdjacentHTML("beforeend", `<div class="transcript">${sec.transcript.map(([w, t]) => `<p><strong>${w === "F" ? "Woman" : "Man"}:</strong> ${esc(t)}</p>`).join("")}</div>`);
      });
    }

    const updatePlayButtons = () => {
      app.querySelectorAll("[data-play]").forEach(b => {
        const si = b.dataset.play;
        const locked = !s.practice && !s.submitted && s.played[si];
        b.disabled = !synth || locked;
        app.querySelector(`[data-status="${si}"]`).textContent = locked ? "Played (exam mode allows one play)" : "";
      });
    };
    updatePlayButtons();

    app.querySelector("#practice-mode").addEventListener("change", e => { s.practice = e.target.checked; save(); updatePlayButtons(); });
    app.querySelectorAll("[data-play]").forEach(b => b.addEventListener("click", () => {
      const si = b.dataset.play;
      s.played[si] = true; save();
      app.querySelectorAll("[data-play]").forEach(x => { x.disabled = true; });
      app.querySelector(`[data-status="${si}"]`).textContent = "Playing…";
      speakLines(secs[si].transcript, () => updatePlayButtons());
    }));
    app.querySelectorAll("[data-stop]").forEach(b => b.addEventListener("click", () => { stopSpeech(); updatePlayButtons(); }));
    bindAnswers(app, s.answers);
    const submit = app.querySelector("#submit");
    if (submit) submit.addEventListener("click", () => {
      stopSpeech();
      gradeObjective(all, s, LISTENING_TABLE);
      renderListening(test);
      window.scrollTo(0, 0);
    });
  }

  // ----- Reading -----
  function renderReading(test) {
    const s = stateFor(test.id).reading;
    const ps = test.reading.passages;
    const all = ps.flatMap(p => p.questions);
    const doSubmit = () => { gradeObjective(all, s, READING_TABLE); stopTimer(); renderReading(test); window.scrollTo(0, 0); };
    if (!s.submitted) {
      if (!s.deadline) { s.deadline = Date.now() + test.reading.minutes * 60000; save(); }
      startTimer(s.deadline, doSubmit);
    } else stopTimer();

    let active = s.activePassage || 0;
    let offsets = [];
    let c = 0;
    ps.forEach(p => { offsets.push(c); c += p.questions.length; });

    const draw = () => {
      const p = ps[active];
      const qs = p.questions.map((q, i) => renderQuestion(q, offsets[active] + i + 1, s.answers[q.id], s.submitted)).join("");
      const result = s.submitted ? `<div class="panel"><h2 style="margin-top:0">Reading score: ${s.raw}/${s.total}</h2><p>Estimated band: <span class="band">${s.band}</span></p>${nextLink(test, "reading")}</div>` : "";
      app.innerHTML = `
        ${result}
        <div class="panel">
          <h1 style="margin-top:0">Reading</h1>
          <p class="muted small">You have ${test.reading.minutes} minutes for all three passages. Your answers are saved as you type. The test submits automatically when time runs out.</p>
          <div class="tabs">${ps.map((x, i) => `<button data-tab="${i}" class="${i === active ? "active" : ""}">Passage ${i + 1}</button>`).join("")}</div>
        </div>
        <div class="split">
          <div class="panel passage"><h2 style="margin-top:0">${esc(p.title)}</h2>${p.text.map(t => `<p>${esc(t)}</p>`).join("")}</div>
          <div class="panel">
            <h3 style="margin-top:0">Questions ${offsets[active] + 1}–${offsets[active] + p.questions.length}</h3>
            ${qs}
            <div class="row" style="margin-top:12px">
              ${active > 0 ? '<button data-go="-1">← Previous passage</button>' : ""}
              ${active < ps.length - 1 ? '<button data-go="1">Next passage →</button>' : ""}
              ${!s.submitted ? '<button class="primary" id="submit">Submit Reading answers</button>' : ""}
            </div>
          </div>
        </div>`;
      app.querySelectorAll("[data-tab]").forEach(b => b.addEventListener("click", () => setActive(+b.dataset.tab)));
      app.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => setActive(active + +b.dataset.go)));
      const submit = app.querySelector("#submit");
      if (submit) submit.addEventListener("click", () => {
        const unanswered = all.filter(q => !s.answers[q.id]).length;
        if (unanswered) confirmClick(submit, `${unanswered} unanswered.`, doSubmit); else doSubmit();
      });
    };
    const setActive = i => { active = i; s.activePassage = i; save(); draw(); window.scrollTo(0, 0); };
    bindAnswers(app, s.answers);
    draw();
  }

  // ----- Writing -----
  function chartSVG(chart) {
    const colors = ["var(--s1)", "var(--s2)", "var(--s3)"];
    const W = 640, H = 300, L = 40, B = 40, T = 20;
    const max = Math.ceil(Math.max(...chart.series.flatMap(s => s.values)) / 10) * 10 || 10;
    const groupW = (W - L - 10) / chart.categories.length;
    const barW = (groupW * 0.75) / chart.series.length;
    const y = v => T + (H - T - B) * (1 - v / max);
    let g = "";
    for (let v = 0; v <= max; v += max / 5) {
      g += `<line class="grid-line" x1="${L}" x2="${W - 10}" y1="${y(v)}" y2="${y(v)}"/><text x="${L - 6}" y="${y(v) + 4}" text-anchor="end">${Math.round(v)}</text>`;
    }
    chart.categories.forEach((cat, ci) => {
      const gx = L + ci * groupW + groupW * 0.125;
      chart.series.forEach((s, si) => {
        const v = s.values[ci];
        g += `<rect x="${gx + si * barW}" y="${y(v)}" width="${barW - 2}" height="${y(0) - y(v)}" fill="${colors[si % colors.length]}" rx="2"><title>${esc(cat)} ${esc(s.name)}: ${v}</title></rect>`;
        g += `<text x="${gx + si * barW + (barW - 2) / 2}" y="${y(v) - 4}" text-anchor="middle" style="font-size:10px">${v}</text>`;
      });
      g += `<text x="${L + ci * groupW + groupW / 2}" y="${H - B + 18}" text-anchor="middle">${esc(cat)}</text>`;
    });
    const legend = chart.series.map((s, si) => `<span style="--c:${colors[si % colors.length]}">${esc(s.name)}</span>`).join("");
    return `<div class="chart"><strong>${esc(chart.title)}</strong><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(chart.title)}">${g}</svg><div class="legend">${legend}</div></div>`;
  }

  const WRITING_CRITERIA = {
    t1: [["ta", "Task Achievement"], ["cc", "Coherence & Cohesion"], ["lr", "Lexical Resource"], ["gra", "Grammar Range & Accuracy"]],
    t2: [["tr", "Task Response"], ["cc", "Coherence & Cohesion"], ["lr", "Lexical Resource"], ["gra", "Grammar Range & Accuracy"]]
  };
  const CHECKLIST = {
    t1: ["Clear overview of the main trends", "Key features highlighted with accurate data", "Comparisons made where relevant", "No personal opinion", "150+ words"],
    t2: ["All parts of the question answered", "Clear position throughout", "Ideas developed with examples", "Logical paragraphs with a conclusion", "250+ words"]
  };
  function rubricHTML(task, ratings) {
    return `<div class="rubric">${WRITING_CRITERIA[task].map(([k, label]) => `
      <label>${label}<select data-rate="${task}.${k}"><option value="">–</option>${BANDS.map(b => `<option ${ratings[k] == b ? "selected" : ""}>${b}</option>`).join("")}</select></label>`).join("")}</div>`;
  }
  function avgRatings(r, keys) {
    const vals = keys.map(k => parseFloat(r[k])).filter(v => !isNaN(v));
    return vals.length === keys.length ? vals.reduce((a, b) => a + b, 0) / vals.length : null;
  }
  function writingBand(s) {
    const t1 = avgRatings(s.ratings.t1, WRITING_CRITERIA.t1.map(c => c[0]));
    const t2 = avgRatings(s.ratings.t2, WRITING_CRITERIA.t2.map(c => c[0]));
    if (t1 == null || t2 == null) return null;
    return roundHalf((t1 + 2 * t2) / 3);
  }

  function renderWriting(test) {
    const s = stateFor(test.id).writing;
    const w = test.writing;
    const doSubmit = () => { s.submitted = true; delete s.deadline; save(); stopTimer(); renderWriting(test); window.scrollTo(0, 0); };
    if (!s.submitted) {
      if (!s.deadline) { s.deadline = Date.now() + w.minutes * 60000; save(); }
      startTimer(s.deadline, doSubmit);
    } else stopTimer();

    const task = (key, data, title, advice) => {
      const text = s[key] || "";
      const wc = wordCount(text);
      return `<div class="panel">
        <h2 style="margin-top:0">${title}</h2>
        <p class="muted small">${advice}</p>
        <p><strong>${esc(data.prompt)}</strong></p>
        ${data.chart ? chartSVG(data.chart) : ""}
        <textarea data-task="${key}" ${s.submitted ? "readonly" : ""} placeholder="Write your answer here…">${esc(text)}</textarea>
        <div class="wc ${wc < data.minWords ? "under" : ""}" data-wc="${key}">${wc} words (minimum ${data.minWords})</div>
        ${s.submitted ? `
          <h3>Self-assessment</h3>
          <ul class="small">${CHECKLIST[key].map(c => `<li>${c}</li>`).join("")}</ul>
          <p class="small muted">Compare your answer with the model answer, then rate each criterion (Task 2 counts double).</p>
          ${rubricHTML(key, s.ratings[key])}
          <details class="model"><summary>Show Band 8–9 model answer</summary><pre>${esc(data.model)}</pre></details>` : ""}
      </div>`;
    };

    const band = writingBand(s);
    app.innerHTML = `
      <div class="panel">
        <h1 style="margin-top:0">Writing</h1>
        <p class="muted small">You have ${w.minutes} minutes for both tasks. Spend about 20 minutes on Task 1 and 40 minutes on Task 2.</p>
        ${s.submitted ? `<p>Writing band: <span class="band" id="wband">${band != null ? band : "–"}</span> <span class="small muted">${band == null ? "Rate all criteria below to calculate." : ""}</span></p>${nextLink(test, "writing")}` : ""}
      </div>
      ${task("t1", w.task1, "Task 1", "Summarise the visual information. You should spend about 20 minutes on this task.")}
      ${task("t2", w.task2, "Task 2", "Write an essay for an educated reader. You should spend about 40 minutes on this task.")}
      ${s.submitted ? "" : '<div class="row"><button class="primary" id="submit">Finish Writing</button></div>'}`;

    app.querySelectorAll("textarea[data-task]").forEach(ta => ta.addEventListener("input", () => {
      const key = ta.dataset.task;
      s[key] = ta.value; save();
      const wc = wordCount(ta.value);
      const min = key === "t1" ? w.task1.minWords : w.task2.minWords;
      const el = app.querySelector(`[data-wc="${key}"]`);
      el.textContent = `${wc} words (minimum ${min})`;
      el.classList.toggle("under", wc < min);
    }));
    app.querySelectorAll("[data-rate]").forEach(sel => sel.addEventListener("change", () => {
      const [t, k] = sel.dataset.rate.split(".");
      s.ratings[t][k] = sel.value;
      s.band = writingBand(s);
      save();
      renderWriting(test);
    }));
    const submit = app.querySelector("#submit");
    if (submit) submit.addEventListener("click", () => confirmClick(submit, "Finish Writing?", doSubmit));
  }

  // ----- Speaking -----
  const SPEAKING_CRITERIA = [["fc", "Fluency & Coherence"], ["lr", "Lexical Resource"], ["gra", "Grammar Range & Accuracy"], ["p", "Pronunciation"]];
  let recorder = null;
  let partTimer = null;

  function renderSpeaking(test) {
    stopTimer();
    const s = stateFor(test.id).speaking;
    const sp = test.speaking;
    const canRecord = !!(navigator.mediaDevices && window.MediaRecorder);
    const qList = (part, qs) => qs.map((q, i) => `<li style="margin-bottom:6px">${esc(q)} ${synth ? `<button class="small" data-ask="${part}.${i}">🔊 Ask</button>` : ""}</li>`).join("");
    const recControls = part => canRecord ? `<div class="row recordings" style="margin-top:10px"><button data-rec="${part}">● Record answer</button><span class="small muted" data-recstatus="${part}"></span></div><div data-recs="${part}"></div>` : "";

    app.innerHTML = `
      <div class="panel">
        <h1 style="margin-top:0">Speaking</h1>
        <p class="muted small">Find a quiet place. Press 🔊 to hear the examiner ask each question, then answer aloud. ${canRecord ? "Record yourself to listen back and assess your performance." : ""}</p>
      </div>
      <div class="panel">
        <h2 style="margin-top:0">Part 1 — Introduction and interview (4–5 min)</h2>
        <p class="muted">Topic: ${esc(sp.part1.topic)}. Give answers of 2–3 sentences with reasons or examples.</p>
        <ol>${qList("p1", sp.part1.questions)}</ol>
        ${recControls("p1")}
      </div>
      <div class="panel">
        <h2 style="margin-top:0">Part 2 — Long turn (3–4 min)</h2>
        <div class="cue">
          <strong>${esc(sp.part2.cue)}</strong>
          <p style="margin:6px 0 0">You should say:</p>
          <ul style="margin:4px 0">${sp.part2.points.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        </div>
        <p class="small muted">You have 1 minute to prepare and make notes, then speak for 1–2 minutes.</p>
        <div class="row"><button class="primary" id="p2start">Start 1-minute preparation</button><span class="big-timer" id="p2timer"></span><span id="p2label" class="muted"></span></div>
        <textarea style="min-height:100px;margin-top:10px" placeholder="Notes…" id="p2notes"></textarea>
        ${recControls("p2")}
      </div>
      <div class="panel">
        <h2 style="margin-top:0">Part 3 — Discussion (4–5 min)</h2>
        <p class="muted">Topic: ${esc(sp.part3.topic)}. Give extended answers, consider different viewpoints and speculate.</p>
        <ol>${qList("p3", sp.part3.questions)}</ol>
        ${recControls("p3")}
      </div>
      <div class="panel">
        <h2 style="margin-top:0">Self-assessment</h2>
        <ul class="small">
          <li><strong>Fluency:</strong> Did you speak at length without long pauses or self-correction?</li>
          <li><strong>Vocabulary:</strong> Did you use less common words and idioms accurately, and paraphrase when needed?</li>
          <li><strong>Grammar:</strong> Did you mix simple and complex sentences with few errors?</li>
          <li><strong>Pronunciation:</strong> Were you easy to understand, with natural stress and intonation?</li>
        </ul>
        <div class="rubric">${SPEAKING_CRITERIA.map(([k, l]) => `<label>${l}<select data-srate="${k}"><option value="">–</option>${BANDS.map(b => `<option ${s.ratings[k] == b ? "selected" : ""}>${b}</option>`).join("")}</select></label>`).join("")}</div>
        <p>Speaking band: <span class="band">${s.band != null ? s.band : "–"}</span></p>
        ${nextLink(test, "speaking")}
      </div>`;

    app.querySelectorAll("[data-ask]").forEach(b => b.addEventListener("click", () => {
      const [part, i] = b.dataset.ask.split(".");
      const q = (part === "p1" ? sp.part1 : sp.part3).questions[+i];
      speakLines([["F", q]]);
    }));

    app.querySelector("#p2start").addEventListener("click", e => {
      e.target.disabled = true;
      speakLines([["F", "Here is your topic. " + sp.part2.cue + " You have one minute to prepare."]]);
      runCountdown(60, "Preparation", () => {
        speakLines([["F", "Please begin speaking now. You have up to two minutes."]]);
        runCountdown(120, "Speaking", () => {
          speakLines([["F", "Thank you."]]);
          e.target.disabled = false;
          e.target.textContent = "Restart Part 2";
        });
      });
    });

    app.querySelectorAll("[data-srate]").forEach(sel => sel.addEventListener("change", () => {
      s.ratings[sel.dataset.srate] = sel.value;
      const avg = avgRatings(s.ratings, SPEAKING_CRITERIA.map(c => c[0]));
      s.band = avg != null ? roundHalf(avg) : null;
      save();
      renderSpeaking(test);
    }));

    app.querySelectorAll("[data-rec]").forEach(btn => btn.addEventListener("click", async () => {
      const part = btn.dataset.rec;
      const status = app.querySelector(`[data-recstatus="${part}"]`);
      if (recorder && recorder.state === "recording") { recorder.stop(); return; }
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const chunks = [];
        recorder = new MediaRecorder(stream);
        recorder.ondataavailable = ev => chunks.push(ev.data);
        recorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          const url = URL.createObjectURL(new Blob(chunks, { type: recorder.mimeType }));
          app.querySelector(`[data-recs="${part}"]`).insertAdjacentHTML("beforeend", `<audio controls src="${url}"></audio>`);
          btn.textContent = "● Record answer";
          status.textContent = "Saved below (recordings are not stored after you leave the page).";
        };
        recorder.start();
        btn.textContent = "■ Stop recording";
        status.textContent = "Recording…";
      } catch (err) {
        status.textContent = "Recording isn't available here. Answer aloud anyway, or open the app from a local copy to record.";
      }
    }));
  }
  function runCountdown(seconds, label, done) {
    clearInterval(partTimer);
    const el = document.getElementById("p2timer");
    const lab = document.getElementById("p2label");
    const end = Date.now() + seconds * 1000;
    const tick = () => {
      if (!document.body.contains(el)) { clearInterval(partTimer); return; }
      const left = (end - Date.now()) / 1000;
      el.textContent = fmtTime(left);
      lab.textContent = label;
      if (left <= 0) { clearInterval(partTimer); done(); }
    };
    tick();
    partTimer = setInterval(tick, 250);
  }

  // ----- Results -----
  function overall(s) {
    const bands = ["listening", "reading", "writing", "speaking"].map(m => s[m].band);
    if (bands.some(b => b == null)) return null;
    return overallRound(bands.reduce((a, b) => a + b, 0) / 4);
  }
  function renderResults(test) {
    stopTimer();
    const s = stateFor(test.id);
    const ov = overall(s);
    const tile = (m, extra) => `<div class="panel"><div class="muted small">${LABELS[m]}</div><div class="val">${s[m].band != null ? s[m].band : "–"}</div><div class="small muted">${extra || ""}</div></div>`;
    const tips = [];
    if (s.listening.band != null && s.listening.band < 7) tips.push("Listening: read questions before each recording and predict the type of answer (number, name, noun). Check spelling.");
    if (s.reading.band != null && s.reading.band < 7) tips.push("Reading: skim each passage for its structure first, then scan for keywords. Remember NOT GIVEN means the passage says nothing either way.");
    if (s.writing.band != null && s.writing.band < 7) tips.push("Writing: always include a clear overview in Task 1, and state your position in the introduction of Task 2.");
    if (s.speaking.band != null && s.speaking.band < 7) tips.push("Speaking: extend answers with reasons and examples, and practise Part 2 with a 1-minute timer.");
    app.innerHTML = `
      <div class="panel">
        <h1 style="margin-top:0">${esc(test.title)} — Results</h1>
        <p>Overall band: <span class="band">${ov != null ? ov : "–"}</span></p>
        ${ov == null ? '<p class="muted">Complete all four modules (and the self-assessment for Writing and Speaking) to see your overall band.</p>' : ""}
      </div>
      <div class="score-grid">
        ${tile("listening", s.listening.submitted ? `${s.listening.raw}/${s.listening.total} correct` : "")}
        ${tile("reading", s.reading.submitted ? `${s.reading.raw}/${s.reading.total} correct` : "")}
        ${tile("writing", "self-assessed")}
        ${tile("speaking", "self-assessed")}
      </div>
      ${tips.length ? `<div class="panel" style="margin-top:16px"><h2 style="margin-top:0">Tips for improvement</h2><ul>${tips.map(t => `<li>${t}</li>`).join("")}</ul></div>` : ""}
      <div class="row" style="margin-top:16px"><a class="btn" href="#home">← All tests</a></div>`;
  }

  // ---------- router ----------
  function route() {
    currentAnswers = null;
    stopSpeech();
    clearInterval(partTimer);
    if (recorder && recorder.state === "recording") recorder.stop();
    const [testId, mod] = location.hash.replace(/^#\/?/, "").split(/[-/]/);
    const test = TESTS.find(t => t.id === testId);
    if (!test) return renderHome();
    const m = MODULES.includes(mod) ? mod : "listening";
    renderNav(test, m);
    ({ listening: renderListening, reading: renderReading, writing: renderWriting, speaking: renderSpeaking, results: renderResults })[m](test);
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);
  route();
})();
