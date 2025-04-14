const questions = [
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

const answers = [
  [
    ["Billie Eilish", "Adele", "Sam Smith"],
    ["Ireland", "Ivory Coast", "Italy"],
    ["Samsung", "Sony", "Nokia"],
    ["Vienna", "Zurich", "Berlin"],
    ["Rhubarb", "Tomatoes", "Avocados"],
  ],
  [
    ["China", "Turkey", "Greece"],
    ["Henry Ford", "Karl Benz", "Henry M. Leland"],
    ["Asia", "Africa", "South America"],
    ["Apollo 11", "Apollo 12", "Apollo 13"],
    ["Greek", "Russian", "Arabic"],
  ],
];

const answerIds = [
  "answerOne",
  "answerTwo",
  "answerThree",
  "answerFour",
  "answerFive",
];

function displayQuestions() {
  const getQuizQuestions = Math.floor(Math.random() * questions.length);
  let formContent = `<input type="hidden" name="quizSet" value="${getQuizQuestions}"> <label for="yourName">Please enter your name: </label><br><input type="text" id="yourName" required name="yourName" placeholder="Enter Your Name..."></input><br>`;
  const quizQuestions = questions[getQuizQuestions];
  const quizAnswers = answers[getQuizQuestions];
  console.log(quizAnswers);
  for (let i = 0; i < quizQuestions.length; i++) {
    formContent += `<label for="${answerIds[i]}">${quizQuestions[i]}</label><br><select name="${answerIds[i]}" id="${answerIds[i]}" required autofocus>   <option value="">Select an Answer</option>
`;

    for (let j = 0; j < quizAnswers[i].length; j++) {
      formContent += `<option required value="${quizAnswers[i][j]}">${quizAnswers[i][j]}</option>`;
    }
    formContent += "</select><br><br>";
  }
  formContent += '<input type="submit">';

  return formContent;
}

const formContainer = document.createElement("form");

formContainer.action = "review.html";
formContainer.method = "get";

formContainer.innerHTML = displayQuestions();

document.body.appendChild(formContainer);

const q = questions;
const a = answers;
