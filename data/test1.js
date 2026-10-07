// IELTS Academic Practice Test 1 — original practice material.
window.IELTS_TESTS = window.IELTS_TESTS || [];
window.IELTS_TESTS.push({
  id: "test1",
  title: "Practice Test 1",
  listening: {
    sections: [
      {
        title: "Section 1",
        intro: "You will hear a woman phoning a sports centre to join a swimming class.",
        transcript: [
          ["M", "Good morning, Riverside Sports Centre. How can I help?"],
          ["F", "Hi. I'd like to sign up for one of your adult swimming classes, please."],
          ["M", "Certainly. Can I take your name first?"],
          ["F", "Yes, it's Helen Marsh. That's M A R S H."],
          ["M", "Thank you, Ms Marsh. And is this your first time with us?"],
          ["F", "Yes, it is. I've just moved to the area."],
          ["M", "Lovely. Could I have your postcode?"],
          ["F", "It's B S seven, four D Q."],
          ["M", "BS7 4DQ. Great. Now, we have beginner classes on Tuesday evenings and improver classes on Thursday mornings."],
          ["F", "I can already swim a bit, so I think the improver class is better for me. But Thursday mornings are difficult because of work."],
          ["M", "There is also an improver class on Saturday at nine thirty."],
          ["F", "Oh, Saturday would be perfect."],
          ["M", "The course lasts eight weeks, and the cost is sixty-four pounds in total, so eight pounds a lesson."],
          ["F", "That's fine. Do I need to bring anything?"],
          ["M", "Just a swimming cap. They're compulsory in the main pool. You can buy one at reception if you need to."],
          ["F", "And how do I get there? Is there parking?"],
          ["M", "We have a car park, but it fills up on Saturdays. Most people come by bus — the number twenty-two stops right outside."],
          ["F", "Perfect. Thank you very much."]
        ],
        questions: [
          { id: "L1", type: "gap", prompt: "Surname: ________", answer: ["marsh"] },
          { id: "L2", type: "gap", prompt: "Postcode: ________", answer: ["bs7 4dq", "bs74dq"] },
          { id: "L3", type: "gap", prompt: "Class level: ________ class", answer: ["improver", "improvers"] },
          { id: "L4", type: "gap", prompt: "Day of class: ________", answer: ["saturday", "saturdays"] },
          { id: "L5", type: "gap", prompt: "Total cost: £________", answer: ["64", "sixty-four", "sixty four"] },
          { id: "L6", type: "gap", prompt: "Must bring a swimming ________", answer: ["cap"] },
          { id: "L7", type: "gap", prompt: "Recommended bus number: ________", answer: ["22", "twenty-two", "twenty two"] }
        ]
      },
      {
        title: "Section 2",
        intro: "You will hear a guide talking to visitors at a city museum.",
        transcript: [
          ["F", "Welcome to the Harbour Museum, everyone. Before we begin, a few practical points."],
          ["F", "The museum was originally a grain warehouse, built in eighteen sixty, and converted into a museum in nineteen ninety-two."],
          ["F", "The ground floor is devoted to shipbuilding. The first floor, which most visitors enjoy the most, tells the story of the families who emigrated from this port."],
          ["F", "Unfortunately, the top floor is closed this month while we install a new exhibition about lighthouses."],
          ["F", "Photography is allowed everywhere, but please don't use a flash, as it damages the older documents."],
          ["F", "The café is next to the main entrance, and today it's offering a fifteen percent discount for anyone with a ticket."],
          ["F", "The tour itself will last about forty-five minutes, and we'll finish in the gift shop."]
        ],
        questions: [
          { id: "L8", type: "mcq", prompt: "What was the building originally used for?", options: ["A shipyard office", "A grain warehouse", "A lighthouse station"], answer: "B" },
          { id: "L9", type: "mcq", prompt: "Which floor do most visitors enjoy most?", options: ["The ground floor", "The first floor", "The top floor"], answer: "B" },
          { id: "L10", type: "mcq", prompt: "Why is the top floor closed?", options: ["A new exhibition is being installed", "It is being repaired", "It is reserved for school groups"], answer: "A" },
          { id: "L11", type: "mcq", prompt: "What are visitors asked not to do?", options: ["Take photographs", "Touch the exhibits", "Use a flash"], answer: "C" },
          { id: "L12", type: "gap", prompt: "Ticket holders get a ________ percent discount at the café.", answer: ["15", "fifteen"] },
          { id: "L13", type: "gap", prompt: "The tour lasts about ________ minutes.", answer: ["45", "forty-five", "forty five"] }
        ]
      },
      {
        title: "Section 3",
        intro: "You will hear two students, Tom and Aisha, discussing their research project.",
        transcript: [
          ["M", "So Aisha, have you decided what we should focus on for the environmental science project?"],
          ["F", "I was thinking about plastic waste in the university canteen. We could measure how much is thrown away each day."],
          ["M", "That's good, but our tutor said she wanted something with interviews as well as numbers."],
          ["F", "Right. So we could count the waste and also interview the canteen staff about why they use so much packaging."],
          ["M", "I like that. Who should do what?"],
          ["F", "I'm better with spreadsheets, so I'll handle the data analysis. Could you do the interviews?"],
          ["M", "Sure. I'll also write the introduction. The tricky part will be the literature review."],
          ["F", "Let's share that. The deadline is the twelfth of May, but I'd like a draft finished by the end of April."],
          ["M", "Agreed. The biggest risk, I think, is that the canteen manager might not give us permission."],
          ["F", "True. Let's email him today."]
        ],
        questions: [
          { id: "L14", type: "mcq", prompt: "What topic do the students choose?", options: ["Food waste in local restaurants", "Plastic waste in the university canteen", "Recycling in student housing"], answer: "B" },
          { id: "L15", type: "mcq", prompt: "What did their tutor want the project to include?", options: ["Interviews as well as numbers", "A survey of students", "A comparison with another university"], answer: "A" },
          { id: "L16", type: "mcq", prompt: "Which task will Aisha do alone?", options: ["The interviews", "The introduction", "The data analysis"], answer: "C" },
          { id: "L17", type: "mcq", prompt: "Which part will they share?", options: ["The literature review", "The conclusion", "The interviews"], answer: "A" },
          { id: "L18", type: "gap", prompt: "Final deadline: ________ May", answer: ["12", "12th", "twelfth", "the twelfth"] },
          { id: "L19", type: "mcq", prompt: "What is the biggest risk to the project?", options: ["Running out of time", "Not getting permission", "Losing their data"], answer: "B" }
        ]
      },
      {
        title: "Section 4",
        intro: "You will hear part of a lecture about urban heat islands.",
        transcript: [
          ["M", "Today I want to talk about the urban heat island effect — the reason cities are often several degrees warmer than the surrounding countryside."],
          ["M", "The main cause is the materials we build with. Concrete and asphalt absorb heat during the day and release it slowly at night. That's why the difference is greatest after sunset."],
          ["M", "A second factor is the loss of vegetation. Trees cool the air through a process called evapotranspiration, releasing water vapour from their leaves."],
          ["M", "Third, waste heat from vehicles and air conditioning units adds to the problem, creating a cycle: hotter streets mean more air conditioning, which means more heat."],
          ["M", "What can be done? One simple solution is painting roofs white, which reflects sunlight. Studies in one city found this lowered roof temperatures by up to thirty degrees."],
          ["M", "Planting street trees is also effective, though it takes years for the benefit to appear."],
          ["M", "Finally, some cities are experimenting with porous pavements, which hold rainwater and cool the surface as it evaporates."]
        ],
        questions: [
          { id: "L20", type: "gap", prompt: "Concrete and asphalt release heat slowly at ________.", answer: ["night", "nighttime", "night-time"] },
          { id: "L21", type: "gap", prompt: "Trees cool the air through a process called ________.", answer: ["evapotranspiration"] },
          { id: "L22", type: "gap", prompt: "Waste heat comes from vehicles and air ________ units.", answer: ["conditioning"] },
          { id: "L23", type: "gap", prompt: "Painting roofs ________ reflects sunlight.", answer: ["white"] },
          { id: "L24", type: "gap", prompt: "This lowered roof temperatures by up to ________ degrees.", answer: ["30", "thirty"] },
          { id: "L25", type: "gap", prompt: "Porous pavements hold ________ and cool the surface.", answer: ["rainwater", "rain water", "rain", "water"] }
        ]
      }
    ]
  },
  reading: {
    minutes: 60,
    passages: [
      {
        title: "Passage 1 — The Rise of the Bicycle",
        text: [
          "The earliest ancestor of the bicycle appeared in Germany in 1817, when Karl Drais built a wooden machine with two wheels and no pedals. Riders pushed themselves along with their feet. Known as the 'running machine', it enjoyed a brief period of fashion among wealthy young men before falling out of use, partly because riders damaged pavements and were banned from them in several cities.",
          "Pedals were added in France during the 1860s, attached directly to the front wheel. Because each turn of the pedals produced only one turn of the wheel, manufacturers began enlarging the front wheel to increase speed. The result was the 'penny-farthing', whose front wheel could exceed 1.5 metres in diameter. It was fast but dangerous: a sudden stop could throw the rider over the handlebars.",
          "The breakthrough came in 1885 with John Kemp Starley's 'safety bicycle', which used a chain to drive the rear wheel and had two wheels of equal size. Combined with the air-filled tyre, patented by John Dunlop in 1888, it produced a machine recognisably similar to today's bicycles.",
          "The social effects were considerable. The bicycle gave ordinary workers affordable transport and allowed them to live further from factories. It is also widely credited with changing women's clothing, as long skirts were impractical for cycling. Some historians argue that it contributed to the movement for women's rights, though others believe this influence has been exaggerated."
        ],
        questions: [
          { id: "R1", type: "tfng", prompt: "Drais's machine was powered by pedals.", answer: "FALSE" },
          { id: "R2", type: "tfng", prompt: "Riders of the running machine were banned from pavements in some cities.", answer: "TRUE" },
          { id: "R3", type: "tfng", prompt: "The penny-farthing was invented by a German engineer.", answer: "NOT GIVEN" },
          { id: "R4", type: "tfng", prompt: "The front wheel of the penny-farthing was enlarged to make it faster.", answer: "TRUE" },
          { id: "R5", type: "tfng", prompt: "All historians agree the bicycle advanced women's rights.", answer: "FALSE" },
          { id: "R6", type: "gap", prompt: "The safety bicycle used a ________ to drive the rear wheel. (ONE WORD)", answer: ["chain"] },
          { id: "R7", type: "gap", prompt: "The air-filled tyre was patented by ________ in 1888. (ONE OR TWO WORDS)", answer: ["dunlop", "john dunlop"] }
        ]
      },
      {
        title: "Passage 2 — Sleep and Memory",
        text: [
          "For much of the twentieth century, sleep was regarded as a passive state in which the brain simply rested. Research over the past three decades has overturned this view. It now appears that sleep plays an active role in consolidating memories — the process by which fragile new memories become stable and long-lasting.",
          "Sleep consists of repeated cycles, each lasting roughly ninety minutes, that move between light sleep, deep 'slow-wave' sleep and rapid eye movement (REM) sleep. Different stages seem to support different kinds of memory. Slow-wave sleep is particularly associated with factual memories, such as vocabulary or dates, while REM sleep appears more important for procedural skills, such as playing an instrument, and for emotional memories.",
          "One influential experiment asked participants to learn pairs of words in the evening. Half then slept, while the other half stayed awake. When tested the next morning, the sleepers remembered significantly more word pairs. Crucially, the difference could not be explained simply by tiredness, because a second group who learned in the morning and were tested in the evening, without sleep, performed no better than the sleep-deprived group.",
          "Recordings of brain activity in rats have provided a possible mechanism. Cells in the hippocampus that fired while a rat explored a maze fired again, in the same order, while the animal slept — as if the brain were 'replaying' the experience. Scientists believe this replay transfers information to the cortex for long-term storage.",
          "The practical implications are significant for students. Staying up all night to revise may be counter-productive, since it deprives the brain of the very process that secures learning. Even a short daytime nap of under an hour has been shown to improve recall."
        ],
        questions: [
          { id: "R8", type: "mcq", prompt: "According to the passage, how was sleep viewed for much of the twentieth century?", options: ["As essential for learning", "As a passive state", "As harmful to memory", "As poorly understood"], answer: "B" },
          { id: "R9", type: "mcq", prompt: "Which type of sleep is most linked to learning a musical instrument?", options: ["Light sleep", "Slow-wave sleep", "REM sleep", "Daytime naps"], answer: "C" },
          { id: "R10", type: "mcq", prompt: "Why was a group tested in the morning and evening without sleep included?", options: ["To rule out tiredness as an explanation", "To compare morning and evening learners", "To measure how quickly people forget", "To test the effect of naps"], answer: "A" },
          { id: "R11", type: "mcq", prompt: "What did the rat experiments suggest?", options: ["Rats need more sleep than humans", "The brain replays experiences during sleep", "The cortex is inactive during sleep", "Mazes improve memory"], answer: "B" },
          { id: "R12", type: "gap", prompt: "Each sleep cycle lasts about ________ minutes. (NUMBER)", answer: ["90", "ninety"] },
          { id: "R13", type: "gap", prompt: "Replay is thought to move information from the hippocampus to the ________. (ONE WORD)", answer: ["cortex"] },
          { id: "R14", type: "gap", prompt: "A daytime ________ of under an hour can improve recall. (ONE WORD)", answer: ["nap"] }
        ]
      },
      {
        title: "Passage 3 — Green Roofs: Promise and Limits",
        text: [
          "Green roofs — roofs partially or completely covered in vegetation — have become a fashionable feature of new urban developments. Advocates claim they reduce flooding, insulate buildings, support wildlife and lower city temperatures. While there is evidence for all of these benefits, I believe the enthusiasm sometimes runs ahead of the data.",
          "The strongest case concerns stormwater. A typical green roof can retain between fifty and ninety percent of the rain that falls on it in summer, releasing it slowly and easing pressure on drainage systems. In winter, however, when plants are dormant and the soil is already saturated, retention falls sharply. Cities that rely on green roofs alone for flood prevention are therefore taking a risk.",
          "Claims about energy savings are more complicated. In hot climates, a green roof can significantly reduce the need for air conditioning in the floor directly below. But in a multi-storey building the effect on lower floors is negligible, and in cold climates the insulating benefit is often smaller than that of conventional insulation, which is far cheaper.",
          "Biodiversity benefits depend heavily on design. The most common type, the 'extensive' roof, uses a thin layer of soil planted with hardy sedum plants. These are cheap and light but support relatively few insects. 'Intensive' roofs, with deeper soil and a variety of plants, attract far more wildlife but require stronger structures and regular maintenance.",
          "None of this means green roofs are a poor investment. It does mean that policymakers should be clear about what they are trying to achieve. A roof designed to hold water is not necessarily the best roof for bees, and a blanket requirement for 'green roofs' on every new building, without specifying their purpose, may produce many roofs that do little well."
        ],
        questions: [
          { id: "R15", type: "ynng", prompt: "The writer thinks enthusiasm for green roofs is sometimes greater than the evidence justifies.", answer: "YES" },
          { id: "R16", type: "ynng", prompt: "Green roofs are equally effective at retaining water in summer and winter.", answer: "NO" },
          { id: "R17", type: "ynng", prompt: "Green roofs are more popular in Europe than in North America.", answer: "NOT GIVEN" },
          { id: "R18", type: "ynng", prompt: "In cold climates, conventional insulation is generally more cost-effective than a green roof.", answer: "YES" },
          { id: "R19", type: "mcq", prompt: "What is true of 'extensive' green roofs?", options: ["They need regular maintenance", "They support many insects", "They are cheap and light", "They have deep soil"], answer: "C" },
          { id: "R20", type: "mcq", prompt: "What does the writer recommend policymakers do?", options: ["Stop funding green roofs", "Require green roofs on every building", "Specify the purpose of green roofs", "Only build intensive roofs"], answer: "C" },
          { id: "R21", type: "gap", prompt: "Extensive roofs are usually planted with hardy ________ plants. (ONE WORD)", answer: ["sedum"] }
        ]
      }
    ]
  },
  writing: {
    minutes: 60,
    task1: {
      prompt: "The chart below shows the percentage of households in one country with access to the internet, by region, in 2005, 2015 and 2025. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        title: "Households with internet access (%)",
        categories: ["Capital", "Northern", "Southern", "Rural"],
        series: [
          { name: "2005", values: [48, 30, 35, 12] },
          { name: "2015", values: [79, 62, 66, 38] },
          { name: "2025", values: [96, 90, 91, 74] }
        ]
      },
      minWords: 150,
      model: "The bar chart compares the proportion of households with internet access in four regions of a country in 2005, 2015 and 2025.\n\nOverall, access rose substantially in every region over the period, and the capital consistently had the highest rate. Although rural areas remained the least connected, they experienced the most dramatic growth, narrowing the gap with the rest of the country.\n\nIn 2005, just under half of households in the capital (48%) were online, compared with around a third in the Northern and Southern regions (30% and 35% respectively). Rural access was very low, at only 12%.\n\nBy 2015, figures had roughly doubled in most areas. The capital reached 79%, while the Northern and Southern regions stood at 62% and 66%. Rural access more than tripled to 38%.\n\nIn 2025, access was almost universal in the capital (96%), and the two other urban regions had caught up considerably, at 90% and 91%. Rural households continued to lag behind at 74%, but this represented a sixfold increase over two decades."
    },
    task2: {
      prompt: "Some people believe that university education should be free for all students. Others think students should pay for their own tuition. Discuss both views and give your own opinion. Write at least 250 words.",
      minWords: 250,
      model: "The question of who should pay for university education divides opinion. While some argue that it should be free to everyone, others believe that students themselves should bear the cost. In my view, a mixed system, in which the state covers most of the cost but graduates contribute according to their income, is the fairest approach.\n\nThose in favour of free tuition argue that higher education benefits society as a whole. Doctors, engineers and teachers trained at university provide services that everyone depends on, so it seems reasonable for taxpayers to fund their education. Moreover, fees can deter talented students from poorer backgrounds, who may be unwilling to take on large debts. Free education therefore promotes equal opportunity.\n\nOn the other hand, opponents point out that graduates usually earn considerably more than non-graduates over their lifetimes. It could be considered unfair to ask a factory worker, through taxation, to pay for the education of someone who will later earn twice as much. Charging fees may also encourage students to choose their courses more carefully and to take their studies seriously.\n\nIn my opinion, both arguments have merit, which is why an income-contingent loan system offers a sensible compromise. Under such a system, tuition is free at the point of study, removing barriers for disadvantaged students, but graduates repay part of the cost only once their earnings exceed a certain threshold. This ensures that those who benefit most financially contribute most.\n\nIn conclusion, although there are strong reasons both for and against free university education, I believe a system that combines public funding with fair repayment by higher-earning graduates best balances fairness and opportunity."
    }
  },
  speaking: {
    part1: {
      topic: "Hometown and daily life",
      questions: [
        "Where is your hometown?",
        "What do you like most about living there?",
        "Has your hometown changed much since you were a child?",
        "What do you usually do at weekends?",
        "Do you prefer mornings or evenings? Why?"
      ]
    },
    part2: {
      cue: "Describe a book that you enjoyed reading.",
      points: ["what the book was", "when you read it", "what it was about", "and explain why you enjoyed it."]
    },
    part3: {
      topic: "Reading and books",
      questions: [
        "Do people in your country read as much as they used to?",
        "What are the advantages of reading printed books compared with e-books?",
        "Should parents encourage children to read for pleasure? Why?",
        "How might technology change the way people read in the future?"
      ]
    }
  }
});
