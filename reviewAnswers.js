//Grabs values from submitted form in URL
const userAnswers = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the answers
function cleanAndCap(str) {
  if (!str) return null;
  let temp = str.trim();
  return temp[0].toUpperCase() + temp.substring(1);
}

const yourName = cleanAndCap(userAnswers.get("yourName"));
// Assigning variable to hold user answers array
const userAnswerArray = [
    (answerOne = cleanAndCap(userAnswers.get("answerOne"))),
    (answerTwo = cleanAndCap(userAnswers.get("answerTwo"))),
    (answerThree = cleanAndCap(userAnswers.get("answerThree"))),
    (answerFour = cleanAndCap(userAnswers.get("answerFour"))),
    (answerFive = cleanAndCap(userAnswers.get("answerFive"))),
    (answerSix = cleanAndCap(userAnswers.get("answerSix"))),
    (answerSeven = cleanAndCap(userAnswers.get("answerSeven"))),
    (answerEight = cleanAndCap(userAnswers.get("answerEight"))),
    (answerNine = cleanAndCap(userAnswers.get("answerNine"))),
    (answerTen = cleanAndCap(userAnswers.get("answerTen"))),
  ];

// Assigning variable to hold questions array
let questions = [
    [
      "Which legendary singer, who was a surprise presenter at the 2025 Grammy Awards, has been nominated for 13 Grammys but never won?",
      "When did Beyoncé win the Grammy for Best Album of the Year for the first time?",
      'Which song by The Beatles, which was the first pop song to feature a sitar, was originally named "This Bird Has Flown"?',
      "Which singer was the only solo musician to have a #1 hit in every year of the 1990s?",
      "Long before she became a pop star in her own right, which blonde singer made it through a few rounds of a Miley Cyrus-run star search contest?",
      "Who is Kendrick Lamar's 'Not Like Us' about?",
      'What is the best-selling album of all time?',
      'What year was the Woodstock music festival held?',
      'How many albums does Led Zeppelin have?',
      'What year did Britney Spears release her hit song "Toxic"?'

    ],
    [
      "Where was the first example of paper money used?",
      "Who is generally considered the inventor of the motor car?",
      "If you were looking at Iguazu Falls, on what continent would you be?",
      "What number was the Apollo mission that successfully put a man on the moon for the first time in human history?",
      "Which of the following languages has the longest alphabet?",
    ],
  ];
// Assigning variable to hold correct answers array
let answers = [
  ["Diana Ross", "2025", "Norwegian Wood", "Mariah Carey", "Sabrina Carpenter", "Drake", "Michael Jackson's Thriller", "1969", "Eight", "2003"],
  ["China", "Karl Benz", "South America", "Apollo 11", "Russian"],
];



// Function declared to determine if user guessed correctly
function checkAnswers() {
  let correct = 0;
  const quizSet = parseInt(userAnswers.get("quizSet"));
  questions = questions[quizSet];
  answers = answers[quizSet];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === userAnswerArray[i]) {
      correct++;
    }
  }
  if (correct < 5) {
    return `<p class="name">Hi ${yourName}! <br> Thanks for playing <br></p><p class="fail">You only got ${correct} / ${answers[quizSet].length}</p>`;
  } else {
    return `<p class="name">Hi ${yourName}! <br> Thanks for playing <br></p><p class="pass">Congrats! You got ${correct} / 5</p>`;
  }
}

function getAnswer(question, answer, userAnswer) {
  return `<div class="answerContainer"><h2>Question: ${question}</h2> <br><p>Correct Answer: ${answer}</p> <br> <p>Your Answer: ${userAnswer}</p></div>`;
}

function getAllAnswers() {
  const pageContent = [];
  for (let i = 0; i < questions.length; i++) {
    pageContent.push(getAnswer(questions[i], answers[i], userAnswerArray[i]));
  }
  return pageContent;
}

document.getElementById("correct").innerHTML = checkAnswers();

document.getElementById("quizAnswers").innerHTML = getAllAnswers();
