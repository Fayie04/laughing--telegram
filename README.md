# IELTS Practice Exams

A self-contained web app with full-format **IELTS Academic** practice tests. No build step or server is needed: open `index.html` in a browser.

Hosted copy: https://claude.ai/artifact/GVWz8i22x3iQ9KCwg61Jmh (private to the owner unless shared).

## What's included

Three complete practice tests. Each has all four modules:

| Module | Format | Marking |
|---|---|---|
| **Listening** | 4 sections, 25 questions. The browser's text-to-speech engine plays the audio, with a different voice for each speaker. Exam mode plays each recording once; practice mode allows replays. | Marked automatically, with a band estimate. The transcript is shown after you submit. |
| **Reading** | 3 passages, 21 questions (True/False/Not Given, Yes/No/Not Given, multiple choice, gap-fill), with a 60-minute timer that submits automatically when time runs out. | Marked automatically, with a band estimate. |
| **Writing** | Task 1 (bar chart report) and Task 2 (essay), 60-minute timer, live word count. | Self-assessed against the four official criteria (Task 2 counts double). Band 8–9 model answers are provided. |
| **Speaking** | Parts 1–3. A spoken examiner asks the questions, and Part 2 has automatic 1-minute preparation and 2-minute speaking timers. You can record yourself in the browser. | Self-assessed against the four official criteria. |

A results page combines the four module bands into an overall band, using IELTS rounding, and gives targeted tips. Progress is saved in your browser's `localStorage`.

## Run locally

```sh
# either open index.html directly, or serve the folder:
python3 -m http.server 8000   # then visit http://localhost:8000
```

Microphone recording needs `http://localhost` or HTTPS. It does not work from `file://` in some browsers.

## Adding a test

Copy `data/test1.js` to a new file, change its `id`, `title` and content, and add a `<script>` tag for it in `index.html`. The question types are `gap`, `mcq`, `tfng` and `ynng`.

> All passages, recordings and prompts are original practice material. Band scores are estimates, not official IELTS results.
