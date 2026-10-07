// IELTS Academic Practice Test 2 — original practice material.
window.IELTS_TESTS = window.IELTS_TESTS || [];
window.IELTS_TESTS.push({
  id: "test2",
  title: "Practice Test 2",
  listening: {
    sections: [
      {
        title: "Section 1",
        intro: "You will hear a man calling a company to rent a flat.",
        transcript: [
          ["F", "Hello, Greenway Lettings, Sarah speaking."],
          ["M", "Hi, I'm calling about the two-bedroom flat advertised on Park Road."],
          ["F", "Ah yes, number fourteen. Can I take your name?"],
          ["M", "David Okafor. O K A F O R."],
          ["F", "Thank you. The rent is nine hundred and fifty pounds a month, and that includes water but not electricity."],
          ["M", "Okay. Is it furnished?"],
          ["F", "It's partly furnished — there's a bed, a sofa and a washing machine, but no dining table."],
          ["M", "And is there anywhere to keep a bicycle?"],
          ["F", "Yes, there's a secure shed in the garden."],
          ["M", "Great. When could I view it?"],
          ["F", "We have a slot on Wednesday at five fifteen."],
          ["M", "That works. And what would I need to bring?"],
          ["F", "Please bring some photo ID and a reference from your current landlord."],
          ["M", "Fine. Is the deposit the same as one month's rent?"],
          ["F", "It's slightly more, actually — one thousand one hundred pounds."]
        ],
        questions: [
          { id: "L1", type: "gap", prompt: "Address: ________ Park Road", answer: ["14", "fourteen"] },
          { id: "L2", type: "gap", prompt: "Caller's surname: ________", answer: ["okafor"] },
          { id: "L3", type: "gap", prompt: "Monthly rent: £________", answer: ["950", "nine hundred and fifty"] },
          { id: "L4", type: "gap", prompt: "Rent includes ________", answer: ["water"] },
          { id: "L5", type: "gap", prompt: "Furniture missing: a dining ________", answer: ["table"] },
          { id: "L6", type: "gap", prompt: "Bicycle kept in a secure ________", answer: ["shed"] },
          { id: "L7", type: "gap", prompt: "Viewing day: ________", answer: ["wednesday"] },
          { id: "L8", type: "gap", prompt: "Deposit: £________", answer: ["1100", "1,100", "one thousand one hundred"] }
        ]
      },
      {
        title: "Section 2",
        intro: "You will hear an announcement about a community festival.",
        transcript: [
          ["M", "Good evening, and thanks for tuning in to Community Radio. This weekend sees the return of the Millbrook Food Festival."],
          ["M", "This year the festival moves from the town square to Victoria Park, because the square is being resurfaced."],
          ["M", "Entry is free for children under twelve, and adult tickets cost five pounds on the day, or four pounds if you book online."],
          ["M", "Highlights include a cooking competition for local schools on Saturday afternoon, and live music on both evenings."],
          ["M", "Organisers are asking visitors to bring their own reusable cups, as there will be no disposable ones on sale."],
          ["M", "Parking in the park is limited to disabled badge holders, so everyone else is encouraged to use the free shuttle bus from the railway station."]
        ],
        questions: [
          { id: "L9", type: "mcq", prompt: "Why has the festival changed location?", options: ["The park is larger", "The square is being resurfaced", "There were complaints about noise"], answer: "B" },
          { id: "L10", type: "mcq", prompt: "How much is an adult ticket booked online?", options: ["£4", "£5", "Free"], answer: "A" },
          { id: "L11", type: "mcq", prompt: "What happens on Saturday afternoon?", options: ["Live music", "A school cooking competition", "A food market"], answer: "B" },
          { id: "L12", type: "mcq", prompt: "What are visitors asked to bring?", options: ["Their own food", "Reusable cups", "Cash only"], answer: "B" },
          { id: "L13", type: "gap", prompt: "A free shuttle bus runs from the railway ________.", answer: ["station"] }
        ]
      },
      {
        title: "Section 3",
        intro: "You will hear a student, Maya, talking to her tutor about her essay.",
        transcript: [
          ["M", "Come in, Maya. I've read your draft on renewable energy policy."],
          ["F", "Thank you. I wasn't sure if the structure was right."],
          ["M", "The structure is actually fine. The main weakness is that you rely too heavily on one source."],
          ["F", "The government report?"],
          ["M", "Exactly. You need to include some independent research, ideally peer-reviewed journal articles."],
          ["F", "Okay. What about my conclusion?"],
          ["M", "It's too short. It simply repeats your introduction. Try to suggest areas for future research."],
          ["F", "That makes sense. Is the word count a problem? I'm slightly over."],
          ["M", "You're allowed ten percent over the limit, so you're fine."],
          ["F", "Great. When should I submit the final version?"],
          ["M", "By Friday the third. And use the Harvard referencing style, not footnotes."]
        ],
        questions: [
          { id: "L14", type: "mcq", prompt: "What does the tutor say about the structure?", options: ["It needs reorganising", "It is fine", "It is too complicated"], answer: "B" },
          { id: "L15", type: "mcq", prompt: "What is the main weakness of the essay?", options: ["It relies too much on one source", "It is too long", "It has no introduction"], answer: "A" },
          { id: "L16", type: "mcq", prompt: "What should Maya add to her conclusion?", options: ["A summary of each paragraph", "Areas for future research", "More statistics"], answer: "B" },
          { id: "L17", type: "gap", prompt: "Students may exceed the word limit by ________ percent.", answer: ["10", "ten"] },
          { id: "L18", type: "gap", prompt: "Referencing style required: ________", answer: ["harvard"] }
        ]
      },
      {
        title: "Section 4",
        intro: "You will hear part of a lecture about the history of coffee.",
        transcript: [
          ["F", "Today's lecture concerns the global spread of coffee, a drink now consumed by roughly a third of the world's population."],
          ["F", "According to legend, coffee was discovered in Ethiopia by a goat herder who noticed his animals became energetic after eating the berries."],
          ["F", "By the fifteenth century, coffee was being cultivated in Yemen, where it was drunk in religious communities to help people stay awake during night prayers."],
          ["F", "Coffee houses then spread throughout the Middle East. In cities like Istanbul they became centres of conversation and news, earning the nickname 'schools of the wise'."],
          ["F", "Coffee reached Europe in the seventeenth century, initially through the port of Venice."],
          ["F", "To break the Arab monopoly, the Dutch began growing coffee in their colonies, particularly on the island of Java."],
          ["F", "Today Brazil is by far the largest producer, responsible for around a third of global output."]
        ],
        questions: [
          { id: "L19", type: "gap", prompt: "Legend says coffee was discovered by a goat ________.", answer: ["herder", "herdsman"] },
          { id: "L20", type: "gap", prompt: "In the 15th century coffee was cultivated in ________.", answer: ["yemen"] },
          { id: "L21", type: "gap", prompt: "It helped people stay awake during night ________.", answer: ["prayers", "prayer"] },
          { id: "L22", type: "gap", prompt: "Coffee houses were nicknamed 'schools of the ________'.", answer: ["wise"] },
          { id: "L23", type: "gap", prompt: "Coffee first entered Europe through ________.", answer: ["venice"] },
          { id: "L24", type: "gap", prompt: "The Dutch grew coffee on the island of ________.", answer: ["java"] },
          { id: "L25", type: "gap", prompt: "The largest producer today is ________.", answer: ["brazil"] }
        ]
      }
    ]
  },
  reading: {
    minutes: 60,
    passages: [
      {
        title: "Passage 1 — The Honeybee's Dance",
        text: [
          "Honeybees live in colonies that can contain up to sixty thousand individuals. To feed such a large population, the colony must locate flowers efficiently, sometimes several kilometres from the hive. The solution, first decoded by the Austrian scientist Karl von Frisch in the 1940s, is a remarkable form of communication known as the 'waggle dance'.",
          "When a forager bee returns from a rich source of nectar, she performs a figure-of-eight movement on the vertical surface of the honeycomb. During the straight central section, she vibrates her abdomen rapidly. The angle of this straight run relative to vertical indicates the direction of the food relative to the sun, while the length of the run indicates distance: the longer the waggle, the further away the flowers.",
          "Bees use a different movement, the 'round dance', for sources very close to the hive, typically within fifty metres. This dance conveys that food is nearby but gives little information about direction.",
          "Von Frisch's conclusions were controversial at first. Some researchers argued that bees found food mainly through smell. However, later experiments using robotic bees confirmed that the dance alone could direct recruits to a specific location. Von Frisch shared the Nobel Prize in 1973 for his work."
        ],
        questions: [
          { id: "R1", type: "tfng", prompt: "A honeybee colony may contain as many as sixty thousand bees.", answer: "TRUE" },
          { id: "R2", type: "tfng", prompt: "The length of the waggle run shows the direction of the food.", answer: "FALSE" },
          { id: "R3", type: "tfng", prompt: "The round dance gives precise directional information.", answer: "FALSE" },
          { id: "R4", type: "tfng", prompt: "Von Frisch first studied bees as a child.", answer: "NOT GIVEN" },
          { id: "R5", type: "tfng", prompt: "Robotic bees were used to test von Frisch's theory.", answer: "TRUE" },
          { id: "R6", type: "gap", prompt: "The round dance is used for food within about ________ metres. (NUMBER)", answer: ["50", "fifty"] },
          { id: "R7", type: "gap", prompt: "Von Frisch shared the Nobel Prize in ________. (NUMBER)", answer: ["1973"] }
        ]
      },
      {
        title: "Passage 2 — The Four-Day Working Week",
        text: [
          "In recent years, a growing number of companies have experimented with a four-day working week, in which employees work around thirty-two hours for the same salary. Trials in several countries have produced encouraging results, though questions remain about whether the model suits every industry.",
          "The largest trial to date involved over sixty companies in the United Kingdom over six months. At the end, the majority chose to continue with the shorter week. Employees reported lower levels of stress and burnout, and the number of sick days fell by around two thirds. Importantly, company revenue remained broadly stable during the trial period.",
          "Supporters argue that productivity often rises when hours are reduced, because workers are more focused and fewer hours are lost to unnecessary meetings. Several firms reported that the trial forced them to examine their working practices and remove inefficient routines.",
          "Critics, however, note that most participating companies were in office-based sectors such as marketing and software. In industries that require continuous staffing, such as healthcare or retail, reducing hours without reducing output would require hiring additional staff, raising costs. There are also concerns that some employees simply compress five days of work into four, leading to longer and more intense days.",
          "The evidence so far suggests that the four-day week can work well in the right circumstances, but that it is not a universal solution."
        ],
        questions: [
          { id: "R8", type: "mcq", prompt: "In a typical four-day week described here, employees", options: ["work 40 hours over four days", "work about 32 hours for the same pay", "receive a lower salary", "work only mornings"], answer: "B" },
          { id: "R9", type: "mcq", prompt: "What happened to sick days in the UK trial?", options: ["They rose slightly", "They stayed the same", "They fell by about two thirds", "They were not measured"], answer: "C" },
          { id: "R10", type: "mcq", prompt: "According to supporters, why might productivity rise?", options: ["Workers are paid more", "Workers are more focused", "Companies hire more staff", "Meetings become longer"], answer: "B" },
          { id: "R11", type: "mcq", prompt: "What concern do critics raise about healthcare and retail?", options: ["Workers there dislike change", "Extra staff would be needed, raising costs", "Revenue would rise too quickly", "They already work four days"], answer: "B" },
          { id: "R12", type: "gap", prompt: "The UK trial lasted ________ months. (NUMBER)", answer: ["6", "six"] },
          { id: "R13", type: "gap", prompt: "Company ________ remained broadly stable during the trial. (ONE WORD)", answer: ["revenue"] },
          { id: "R14", type: "gap", prompt: "Most participating firms were in office-based sectors such as marketing and ________. (ONE WORD)", answer: ["software"] }
        ]
      },
      {
        title: "Passage 3 — Should We Bring Back Extinct Species?",
        text: [
          "Advances in genetic engineering have made 'de-extinction' — the revival of extinct species — a realistic scientific goal. Projects are under way to recreate animals such as the woolly mammoth, by editing the DNA of its closest living relative, the Asian elephant. Yet I am not convinced that this is the best use of limited conservation resources.",
          "Proponents offer several arguments. Reviving large herbivores such as the mammoth, they claim, could restore Arctic grasslands, which store carbon more effectively than the forests that have replaced them. De-extinction research may also produce techniques useful for protecting endangered species, such as increasing the genetic diversity of small populations.",
          "These benefits deserve to be taken seriously. However, the costs are enormous, and the animals produced would not be true mammoths but genetically modified elephants with some mammoth traits. More importantly, a revived species would need a suitable habitat, and the very pressures that cause extinction — habitat loss, climate change and hunting — have not gone away.",
          "There is also a moral hazard. If the public comes to believe that extinction is reversible, the urgency of protecting existing species may decline. Funding for de-extinction could, in effect, compete with funding for conventional conservation, which has a far stronger record of success.",
          "That said, the research itself should not be abandoned. The genetic tools it develops may prove invaluable. The question is one of priorities, and at present, preventing extinction remains far cheaper and more effective than reversing it."
        ],
        questions: [
          { id: "R15", type: "ynng", prompt: "The writer believes de-extinction is the best use of conservation funding.", answer: "NO" },
          { id: "R16", type: "ynng", prompt: "Arctic grasslands store carbon better than the forests replacing them.", answer: "YES" },
          { id: "R17", type: "ynng", prompt: "A revived mammoth would be genetically identical to the original species.", answer: "NO" },
          { id: "R18", type: "ynng", prompt: "Most scientists support the mammoth project.", answer: "NOT GIVEN" },
          { id: "R19", type: "mcq", prompt: "What is the 'moral hazard' the writer describes?", options: ["Scientists may lose their jobs", "People may care less about protecting existing species", "Revived animals may be dangerous", "Elephants may be harmed"], answer: "B" },
          { id: "R20", type: "mcq", prompt: "What is the writer's overall conclusion?", options: ["All de-extinction research should stop", "Preventing extinction should be the priority", "Mammoths should be revived as soon as possible", "Conventional conservation has failed"], answer: "B" },
          { id: "R21", type: "gap", prompt: "The mammoth's closest living relative is the Asian ________. (ONE WORD)", answer: ["elephant"] }
        ]
      }
    ]
  },
  writing: {
    minutes: 60,
    task1: {
      prompt: "The chart below shows the average number of hours per week spent on different leisure activities by young adults (aged 18–25) in one country in 2010 and 2024. Summarise the information by selecting and reporting the main features, and make comparisons where relevant. Write at least 150 words.",
      chart: {
        title: "Average hours per week on leisure activities (ages 18–25)",
        categories: ["Social media", "TV", "Sport", "Reading", "Gaming"],
        series: [
          { name: "2010", values: [4, 14, 5, 4, 6] },
          { name: "2024", values: [15, 6, 4, 2, 9] }
        ]
      },
      minWords: 150,
      model: "The bar chart compares how many hours per week young adults aged 18 to 25 spent on five leisure activities in 2010 and 2024.\n\nOverall, there was a dramatic shift away from television towards social media, which became by far the most time-consuming activity. Gaming also gained popularity, whereas sport and reading declined slightly.\n\nIn 2010, television dominated young people's free time, at 14 hours per week, more than twice the figure for any other activity. Gaming accounted for 6 hours, sport 5 hours, and social media and reading just 4 hours each.\n\nBy 2024, the picture had changed considerably. Time spent on social media almost quadrupled to 15 hours, while television viewing fell sharply to only 6 hours. Gaming rose by 3 hours to 9. In contrast, the time devoted to sport dipped slightly to 4 hours, and reading halved to just 2 hours, making it the least popular activity."
    },
    task2: {
      prompt: "In many cities, the use of private cars is increasing, causing traffic congestion and pollution. What are the causes of this problem, and what measures could be taken to solve it? Write at least 250 words.",
      minWords: 250,
      model: "Rising car ownership in cities has led to serious congestion and air pollution in many parts of the world. This essay will examine the main reasons for this trend and propose some practical solutions.\n\nThe principal cause is the inadequacy of public transport in many cities. Where buses are infrequent, unreliable or overcrowded, people understandably prefer the comfort and flexibility of a car. Urban sprawl compounds the problem: as cities expand outwards, many residents live far from their workplaces and from train or metro lines, making a car seem essential. Furthermore, rising incomes in developing economies mean that more families can afford a vehicle, which is often regarded as a symbol of status.\n\nSeveral measures could address this issue. First and foremost, governments should invest in fast, affordable and reliable public transport. Cities such as Singapore and Copenhagen demonstrate that when public transport is genuinely convenient, many people choose to leave their cars at home. Second, financial disincentives can be effective. Congestion charges, like the one introduced in London, reduce traffic in city centres while generating revenue that can be reinvested in transport. Finally, urban planning should prioritise cycling and walking by creating safe bicycle lanes and pedestrian zones, and by encouraging mixed-use developments where homes, shops and offices are close together.\n\nIn conclusion, the growing number of private cars in cities is largely the result of poor public transport, urban sprawl and rising wealth. A combination of investment in public transport, charges on driving and better urban design offers the most promising way to create cleaner and less congested cities."
    }
  },
  speaking: {
    part1: {
      topic: "Work, study and free time",
      questions: [
        "Do you work or are you a student?",
        "What do you enjoy most about your work or studies?",
        "How do you usually relax after a busy day?",
        "Do you like cooking? Why or why not?",
        "How often do you use public transport?"
      ]
    },
    part2: {
      cue: "Describe a place you have visited that you would like to return to.",
      points: ["where it is", "when you went there", "what you did there", "and explain why you would like to return."]
    },
    part3: {
      topic: "Travel and tourism",
      questions: [
        "Why do you think people enjoy travelling to other countries?",
        "What are the negative effects of tourism on local communities?",
        "Should governments limit the number of tourists visiting popular places?",
        "How has the way people travel changed in recent decades?"
      ]
    }
  }
});
