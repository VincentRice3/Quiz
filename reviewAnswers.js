//Grabs values from submitted form in URL
const userAnswers = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the answers
function cleanAndCap(str) {
  if (!str) return null;
  let temp = str.trim();
  return temp[0].toUpperCase() + temp.substring(1);
}

const yourName = cleanAndCap(userAnswers.get("yourName"));

// Assigning variables with answer values
const answerOne = cleanAndCap(userAnswers.get("answerOne"));
const answerTwo = cleanAndCap(userAnswers.get("answerTwo"));
const answerThree = cleanAndCap(userAnswers.get("answerThree"));
const answerFour = cleanAndCap(userAnswers.get("answerFour"));
const answerFive = cleanAndCap(userAnswers.get("answerFive"));

// Assigning variable to hold questions array
let questions = [
  [
    "Who sang the title song for the latest Bond film, No Time to Die?",
    "Which flies a green, white, and orange (in that order) tricolor flag?",
    "What company makes the Xperia model of smartphone?",
    "Which city is home to the Brandenburg Gate?",
    "Which of the following is NOT a fruit?",
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
  ["Billie Eilish", "Ireland", "Sony", "Berlin", "Rhubarb"],
  ["China", "Karl Benz", "South America", "Apollo 11", "Russian"],
];

// Assigning variable to hold user answers array
const userAnswerArray = [
  answerOne,
  answerTwo,
  answerThree,
  answerFour,
  answerFive,
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
  if (correct < 3) {
    return `<p class="name">Hi ${yourName}! <br> Thanks for playing <br></p><p class="fail">You only got ${correct} / 5</p>`;
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
