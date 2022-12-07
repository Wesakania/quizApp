let index = 0;
let quiz = [
  {
    question: "which of the following is not the limitations of using written sources to collect information on history and Government?",
    option:[
      "It is limited to literate people; Can be destroyed by Ants/bad weather",
      "It is an expensive method",
      "It takes a lot of time",
      "Is the study of man and his past events",
    ],
    answer: 4,
  },
  {
    question: "Identify three branches of History",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "What is geography",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identify three branches of East African Coast",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identify three branches of chemistry",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identidy theories that explain the origin of man",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identify three branches of Arcaheology",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "What is CRE",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identify three branches of English",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
  {
    question: "Identify three branches of Government",
    option:[
      "Mythical history; creation history; stories history",
      "Social history; Economic history; Social history",
      "Anthropology; Genetics; palaentology; Archaeology",
      "Written; Unwritten; Culture; Government",
    ],
    answer: 2,
  },
];

let attempt = 0;
let score = 0;
let wrong  = 0;
let questions = quiz.sort(function(){
  return 0.5 - Math.random();
});

let totalQuestion = questions.length;