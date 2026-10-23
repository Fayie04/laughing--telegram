// IELTS Academic Practice Test 3 — original practice material.
window.IELTS_TESTS = window.IELTS_TESTS || [];
window.IELTS_TESTS.push({
  id: "test3",
  title: "Practice Test 3",
  listening: {
    sections: [
      {
        title: "Section 1",
        intro: "You will hear a man joining a public library.",
        transcript: [
          ["F", "Good afternoon, Northfield Library. How can I help?"],
          ["M", "Hello. I'd like to become a member, please."],
          ["F", "Of course. What's your full name?"],
          ["M", "James Whitlock. That's W H I T L O C K."],
          ["F", "Thank you. And your date of birth?"],
          ["M", "The nineteenth of March, nineteen ninety-one."],
          ["F", "And a contact phone number?"],
          ["M", "Zero seven seven double four, nine one two three five eight."],
          ["F", "Lovely. Standard membership is free, and you can borrow up to twelve items at a time for three weeks."],
          ["M", "Can I borrow films as well as books?"],
          ["F", "Yes, DVDs cost one pound fifty each per week. E-books and audiobooks are free through our app."],
          ["M", "Great. Are there any study spaces?"],
          ["F", "Yes, the quiet study room is on the second floor. You'll need to book it at the front desk."],
          ["M", "And what time do you close?"],
          ["F", "Eight p.m. on weekdays, but five p.m. on Saturdays. We're closed on Sundays."],
          ["M", "Perfect. Thanks very much."]
        ],
        questions: [
          { id: "L1", type: "gap", prompt: "Surname: ________", answer: ["whitlock"] },
          { id: "L2", type: "gap", prompt: "Date of birth: ________ March 1991", answer: ["19", "19th", "nineteenth", "the nineteenth"] },
          { id: "L3", type: "gap", prompt: "Phone: 07744 ________", answer: ["912358", "912 358"] },
          { id: "L4", type: "gap", prompt: "Maximum items borrowed at one time: ________", answer: ["12", "twelve"] },
          { id: "L5", type: "gap", prompt: "Loan period: ________ weeks", answer: ["3", "three"] },
          { id: "L6", type: "gap", prompt: "DVD hire: £________ per week", answer: ["1.50", "1.5", "one fifty", "one pound fifty"] },
          { id: "L7", type: "gap", prompt: "Quiet study room location: ________ floor", answer: ["second", "2nd"] },
          { id: "L8", type: "gap", prompt: "Saturday closing time: ________ p.m.", answer: ["5", "five", "5pm", "5 pm"] }
        ]
      },
      {
        title: "Section 2",
        intro: "You will hear a ranger welcoming new volunteers to a nature reserve.",
        transcript: [
          ["F", "Hello, everyone, and welcome to Kestrel Marsh Nature Reserve. Thank you for volunteering with us."],
          ["F", "The reserve covers about four hundred hectares, and it's best known for its wading birds, especially in autumn, when thousands arrive from the Arctic."],
          ["F", "Most of our volunteer work happens in winter, when we cut back reeds and clear ditches. In summer, the focus moves to guiding visitors and running children's activities."],
          ["F", "Safety first: please always wear the waterproof boots we provide, because the paths near the lagoon flood without warning."],
          ["F", "If you see an injured bird, don't try to pick it up. Note its location and call the duty ranger."],
          ["F", "Volunteers meet at the visitor centre at nine o'clock. We'll provide lunch on full-day sessions, but please bring a refillable water bottle."]
        ],
        questions: [
          { id: "L9", type: "mcq", prompt: "The reserve is best known for", options: ["rare plants", "wading birds", "its lagoon walks"], answer: "B" },
          { id: "L10", type: "mcq", prompt: "When does most volunteer work take place?", options: ["Spring", "Summer", "Winter"], answer: "C" },
          { id: "L11", type: "mcq", prompt: "Why must volunteers wear waterproof boots?", options: ["Paths can flood suddenly", "It is a uniform rule", "Reeds are sharp"], answer: "A" },
          { id: "L12", type: "mcq", prompt: "What should volunteers do if they find an injured bird?", options: ["Take it to the visitor centre", "Pick it up carefully", "Call the duty ranger"], answer: "C" },
          { id: "L13", type: "gap", prompt: "The reserve covers about ________ hectares.", answer: ["400", "four hundred"] },
          { id: "L14", type: "gap", prompt: "Volunteers should bring a refillable water ________.", answer: ["bottle"] }
        ]
      },
      {
        title: "Section 3",
        intro: "You will hear two students, Leo and Priya, planning a presentation on fast fashion.",
        transcript: [
          ["M", "Priya, we need to finalise the plan for our presentation on fast fashion."],
          ["F", "Yes. I think we should open with a striking statistic — like how many garments are thrown away each year."],
          ["M", "Good idea. Then we could explain the business model: cheap production, quick trends, low prices."],
          ["F", "After that, the environmental impact. Water use is the most shocking part, I think — more than carbon emissions."],
          ["M", "Agreed. Who's doing the slides?"],
          ["F", "I'll design them, since I've used the software before. You're a stronger speaker, so you could present the solutions section."],
          ["M", "Fine. For solutions, I'd focus on second-hand shopping rather than recycling, because recycling clothes is still technically difficult."],
          ["F", "Makes sense. Our tutor said we have fifteen minutes, including questions."],
          ["M", "Then let's aim for twelve minutes of content. Shall we rehearse on Thursday?"],
          ["F", "Thursday's fine, in the library group room."]
        ],
        questions: [
          { id: "L15", type: "mcq", prompt: "How will the presentation begin?", options: ["With a short video", "With a striking statistic", "With a definition of fast fashion"], answer: "B" },
          { id: "L16", type: "mcq", prompt: "Which environmental impact does Priya find most shocking?", options: ["Carbon emissions", "Water use", "Chemical waste"], answer: "B" },
          { id: "L17", type: "mcq", prompt: "Why will Priya design the slides?", options: ["She has used the software before", "She is a weak speaker", "Leo asked her to"], answer: "A" },
          { id: "L18", type: "mcq", prompt: "Why will Leo focus on second-hand shopping?", options: ["It is cheaper", "Their tutor recommended it", "Recycling clothes is technically difficult"], answer: "C" },
          { id: "L19", type: "gap", prompt: "Planned length of content: ________ minutes", answer: ["12", "twelve"] },
          { id: "L20", type: "gap", prompt: "Rehearsal day: ________", answer: ["thursday"] }
        ]
      },
      {
        title: "Section 4",
        intro: "You will hear part of a lecture about exploring the deep ocean.",
        transcript: [
          ["M", "Today we turn to the deep ocean — waters below two hundred metres, where sunlight barely penetrates."],
          ["M", "It's often said that we have better maps of Mars than of our own sea floor. Until recently, only about a quarter of the ocean floor had been mapped in high resolution."],
          ["M", "The main challenge is pressure. At the bottom of the Mariana Trench, it is more than a thousand times greater than at the surface."],
          ["M", "Early exploration relied on crewed submersibles, but today most work is done by remotely operated vehicles, controlled from ships by a cable."],
          ["M", "More recently, autonomous underwater vehicles, which need no cable, have allowed scientists to survey much larger areas."],
          ["M", "One of the most important discoveries was hydrothermal vents in nineteen seventy-seven. These support entire ecosystems that depend not on sunlight but on chemicals from the Earth's interior."],
          ["M", "Today the deep sea faces a new threat: mining for metals used in batteries."]
        ],
        questions: [
          { id: "L21", type: "gap", prompt: "The deep ocean begins below ________ metres.", answer: ["200", "two hundred"] },
          { id: "L22", type: "gap", prompt: "Only about a ________ of the ocean floor was mapped in high resolution.", answer: ["quarter"] },
          { id: "L23", type: "gap", prompt: "The main challenge of exploration is ________.", answer: ["pressure"] },
          { id: "L24", type: "gap", prompt: "Remotely operated vehicles are controlled by a ________.", answer: ["cable"] },
          { id: "L25", type: "gap", prompt: "Hydrothermal vents were discovered in ________.", answer: ["1977"] },
          { id: "L26", type: "gap", prompt: "Vent ecosystems depend on ________ instead of sunlight.", answer: ["chemicals", "chemical"] },
          { id: "L27", type: "gap", prompt: "A new threat is mining for metals used in ________.", answer: ["batteries", "battery"] }
        ]
      }
    ]
  },
  reading: {
    minutes: 60,
    passages: [
      {
        title: "Passage 1 — A Short History of Chocolate",
        text: [
          "Chocolate comes from the seeds of the cacao tree, which is native to the tropical forests of Central and South America. The earliest evidence of its use dates back over five thousand years to what is now Ecuador, where traces of cacao have been found in ancient pottery.",
          "For the Maya and later the Aztecs, chocolate was a drink rather than a food. Cacao seeds were ground, mixed with water, chilli and maize, and poured from a height to create a foam. The drink was bitter and was associated with religious ceremonies. Among the Aztecs, cacao seeds were so valuable that they were used as currency.",
          "Spanish explorers brought cacao to Europe in the sixteenth century. There, it was sweetened with sugar and flavoured with cinnamon and vanilla, and it became a fashionable drink among the aristocracy. Because the ingredients were imported and expensive, ordinary people could rarely afford it.",
          "Solid chocolate is a relatively recent invention. In 1828, the Dutch chemist Coenraad van Houten developed a press that separated cocoa butter from cocoa powder, making chocolate cheaper and easier to process. The first chocolate bar was produced in England in 1847, and milk chocolate was created in Switzerland in 1875 using powdered milk.",
          "Today, around seventy percent of the world's cacao is grown in West Africa, particularly in Côte d'Ivoire and Ghana, far from the plant's original home."
        ],
        questions: [
          { id: "R1", type: "tfng", prompt: "The earliest evidence of cacao use comes from Ecuador.", answer: "TRUE" },
          { id: "R2", type: "tfng", prompt: "The Maya ate chocolate as a solid food.", answer: "FALSE" },
          { id: "R3", type: "tfng", prompt: "The Aztecs used cacao seeds as money.", answer: "TRUE" },
          { id: "R4", type: "tfng", prompt: "Chocolate was popular among all social classes in sixteenth-century Europe.", answer: "FALSE" },
          { id: "R5", type: "tfng", prompt: "Van Houten's press was first used in Switzerland.", answer: "NOT GIVEN" },
          { id: "R6", type: "gap", prompt: "The first chocolate bar was made in ________ in 1847. (ONE WORD)", answer: ["england"] },
          { id: "R7", type: "gap", prompt: "Milk chocolate was created using powdered ________. (ONE WORD)", answer: ["milk"] }
        ]
      },
      {
        title: "Passage 2 — Why We Procrastinate",
        text: [
          "Almost everyone puts off tasks they know they should do. Surveys suggest that around twenty percent of adults are chronic procrastinators, delaying important work so often that it harms their careers, finances or health. For a long time, procrastination was seen as a problem of poor time management. Psychologists now believe this explanation is incomplete.",
          "According to a growing body of research, procrastination is primarily a problem of emotion regulation. People delay tasks not because they cannot plan, but because the task triggers unpleasant feelings such as boredom, anxiety or self-doubt. Avoiding the task provides immediate relief, which rewards the behaviour and makes it more likely to happen again.",
          "This explains why procrastination often affects the tasks people care about most. A student who wants to write an excellent essay may feel more anxious about it, and therefore more tempted to delay, than a student who does not care about the result.",
          "One factor that makes procrastination worse is what researchers call 'temporal disconnection'. Brain-imaging studies show that when people think about their future selves, their brain activity resembles that produced when they think about strangers. In effect, procrastinators pass the burden on to someone they do not fully identify with.",
          "Fortunately, several strategies appear to help. Breaking a task into very small steps reduces the anxiety associated with starting. Forgiving oneself for past procrastination, perhaps surprisingly, has been shown to reduce future delay, whereas harsh self-criticism tends to increase it."
        ],
        questions: [
          { id: "R8", type: "mcq", prompt: "What proportion of adults are described as chronic procrastinators?", options: ["About 10%", "About 20%", "About half", "Almost everyone"], answer: "B" },
          { id: "R9", type: "mcq", prompt: "According to recent research, procrastination is mainly a problem of", options: ["time management", "intelligence", "emotion regulation", "laziness"], answer: "C" },
          { id: "R10", type: "mcq", prompt: "Why might a student delay an essay they care about?", options: ["They feel more anxious about it", "They think it is easy", "They have too much time", "They dislike the subject"], answer: "A" },
          { id: "R11", type: "mcq", prompt: "What does 'temporal disconnection' refer to?", options: ["Losing track of time", "Seeing one's future self almost as a stranger", "Forgetting deadlines", "Working late at night"], answer: "B" },
          { id: "R12", type: "gap", prompt: "Avoiding a task gives immediate ________, which rewards the behaviour. (ONE WORD)", answer: ["relief"] },
          { id: "R13", type: "gap", prompt: "Breaking tasks into small steps reduces the ________ of starting. (ONE WORD)", answer: ["anxiety"] },
          { id: "R14", type: "gap", prompt: "Harsh self-________ tends to increase procrastination. (ONE WORD)", answer: ["criticism"] }
        ]
      },
      {
        title: "Passage 3 — Remote Work and the Future of Cities",
        text: [
          "When millions of office workers were sent home in 2020, many commentators predicted the decline of the city. If people could work from anywhere, why would they pay high rents to live near expensive downtown offices? Several years on, I think those predictions have proved largely mistaken, although cities have certainly changed.",
          "It is true that remote and hybrid work have become permanent features of many industries. In several large cities, office occupancy remains well below pre-2020 levels, and some businesses in central districts, particularly cafés and sandwich shops that served commuters, have closed.",
          "However, the mass exodus to the countryside never materialised. While some workers moved to smaller towns, most stayed within reach of a major city. The reason is that cities offer far more than offices: they provide culture, social life, a wide choice of jobs and, for many, a partner. These advantages have not disappeared because of video calls.",
          "What has changed is the geography of activity within cities. Spending has shifted from central business districts to residential neighbourhoods, where people now buy their lunch and coffee. This has revitalised some local high streets that had been struggling for years.",
          "The challenge for city planners is to adapt. Empty offices could be converted into housing, which many cities badly need, although such conversions are often expensive and technically difficult. Public transport systems, designed around a five-day commute, may also need to rethink their schedules. Cities are not dying; they are being reshaped."
        ],
        questions: [
          { id: "R15", type: "ynng", prompt: "The writer believes predictions about the decline of cities were mostly wrong.", answer: "YES" },
          { id: "R16", type: "ynng", prompt: "Most workers who left cities moved abroad.", answer: "NOT GIVEN" },
          { id: "R17", type: "ynng", prompt: "Video calls have removed the social advantages of living in a city.", answer: "NO" },
          { id: "R18", type: "ynng", prompt: "Converting offices into housing is always simple and cheap.", answer: "NO" },
          { id: "R19", type: "mcq", prompt: "Which businesses have been most affected by remote work?", options: ["Large retailers", "Cafés and sandwich shops serving commuters", "Residential estate agents", "Public transport companies"], answer: "B" },
          { id: "R20", type: "mcq", prompt: "What has happened to spending within cities?", options: ["It has fallen everywhere", "It has moved to residential neighbourhoods", "It has moved online only", "It has increased in business districts"], answer: "B" },
          { id: "R21", type: "gap", prompt: "Public transport was designed around a five-day ________. (ONE WORD)", answer: ["commute"] }
        ]
      }
    ]
  },
  writing: {
    minutes: 60,
    task1: {
      prompt: "The chart below shows the percentage of waste that was recycled, sent to landfill and burned for energy in one city in 2000, 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        title: "How a city's waste was treated (%)",
        categories: ["Recycled", "Landfill", "Burned for energy"],
        series: [
          { name: "2000", values: [12, 78, 10] },
          { name: "2010", values: [31, 49, 20] },
          { name: "2020", values: [46, 18, 36] }
        ]
      },
      minWords: 150,
      model: "The bar chart shows how waste in one city was dealt with in 2000, 2010 and 2020, divided into recycling, landfill and burning for energy.\n\nOverall, there was a dramatic move away from landfill over the twenty-year period, while both recycling and energy recovery became considerably more common. By 2020, recycling had become the most common method of waste disposal.\n\nIn 2000, the vast majority of waste (78%) was sent to landfill. Only 12% was recycled, and an even smaller proportion, 10%, was burned to produce energy.\n\nBy 2010, the share of landfill had fallen to just under half (49%). Recycling had more than doubled to 31%, and the percentage burned for energy had also doubled, to 20%.\n\nThis trend continued over the following decade. In 2020, recycling accounted for 46% of waste, and energy recovery reached 36%. Landfill, meanwhile, had fallen sharply to only 18%, less than a quarter of its 2000 level."
    },
    task2: {
      prompt: "Many children now spend several hours a day using smartphones and tablets. Do the advantages of this outweigh the disadvantages? Write at least 250 words.",
      minWords: 250,
      model: "In recent years, smartphones and tablets have become a central part of many children's lives, and it is now common for young people to spend several hours a day using them. Although these devices offer some educational and social benefits, I believe that, at this level of use, the disadvantages outweigh the advantages.\n\nThere are certainly positive aspects to children's use of technology. Educational apps and videos can make learning engaging, helping children practise mathematics or learn a foreign language at their own pace. Devices also allow children to stay in touch with friends and relatives, which can be particularly valuable for families living apart. Furthermore, familiarity with technology may prepare young people for a future workplace in which digital skills are essential.\n\nHowever, the drawbacks of spending several hours a day on screens are significant. Firstly, there are clear risks to physical health. Time spent on devices is often time not spent playing outside, and studies have linked heavy screen use to lower levels of physical activity and poorer sleep. Secondly, much of the content children consume is designed to capture attention rather than to educate, and social media in particular has been associated with anxiety and low self-esteem among teenagers. Finally, excessive screen time can reduce face-to-face interaction, which is essential for developing communication skills and empathy.\n\nIn conclusion, while smartphones and tablets can be useful tools for learning and communication, the physical, psychological and social costs of using them for several hours each day are, in my view, greater than the benefits. Parents and schools should therefore encourage moderate and purposeful use rather than unlimited access."
    }
  },
  speaking: {
    part1: {
      topic: "Music and weather",
      questions: [
        "What kind of music do you enjoy?",
        "Did you learn to play a musical instrument as a child?",
        "Do you prefer listening to music alone or with other people?",
        "What is the weather usually like where you live?",
        "Does the weather affect your mood? How?"
      ]
    },
    part2: {
      cue: "Describe a person who has helped you to achieve something.",
      points: ["who the person is", "what you achieved", "how they helped you", "and explain how you felt about their help."]
    },
    part3: {
      topic: "Teaching and learning",
      questions: [
        "What qualities make someone a good teacher?",
        "Is it better to learn from a teacher or to teach yourself? Why?",
        "How has technology changed the way people learn new skills?",
        "Do you think older people should continue learning throughout their lives?"
      ]
    }
  }
});
