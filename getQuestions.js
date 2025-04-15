
// Cleans up and capitalizes the answers
function cleanAndCap(str) {
  if (!str) return null;
  let temp = str.trim();
  return temp[0].toUpperCase() + temp.substring(1);
}

const chooseQuestions = () => {
    //Grabs values from submitted form in URL
    const userChoice = new URLSearchParams(window.location.search);
    const category = cleanAndCap(userChoice.get("quizSelection"))
    let quizSet = 0;
    switch (category) {
        case 'Music':
            quizSet = 0;
            console.log(quizSet)
            break;
        case 'Sports':
            quizSet = 1;
            break;
        case 'Random':
            quizSet = Math.floor(Math.random() * questions.length);
            break;
        default:
            return 'Quiz doesnt exist'
    }
    return quizSet;
}

const questions = [
  [
    "Which legendary singer, who was a surprise presenter at the 2025 Grammy Awards, has been nominated for 13 Grammys but never won?",
    "When did Beyoncé win the Grammy for Best Album of the Year for the first time?",
    'Which song by The Beatles, which was the first pop song to feature a sitar, was originally named "This Bird Has Flown"?',
    "Which singer was the only solo musician to have a #1 hit in every year of the 1990s?",
    "Long before she became a pop star in her own right, which blonde singer made it through a few rounds of a Miley Cyrus-run star search contest?",
    "Who is Kendrick Lamar's 'Not Like Us' about?",
    "What is the best-selling album of all time?",
    "What year was the Woodstock music festival held?",
    "How many albums does Led Zeppelin have?",
    'What year did Britney Spears release her hit song "Toxic"?',
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
    ["Billie Eilish", "Diana Ross", "Sam Smith"],
    ["2025", "2020", "2015"],
    ["Hey Jude", "Norwegian Wood", "Blowin' In The Wind"],
    ["Mariah Carey", "Beyonce", "Vanilla Ice"],
    ["Zendaya", "Sabrina Carpenter", "Demi Lovato"],
    ['Drake', 'Kanye West', 'Eminem'],
    ["Michael Jackson's Thriller", "Abbey Road, The Beatles", "Nevermind, Nirvana"],
    ['1969', '1974', '1972'],
    ['Eight', 'Ten', 'Seven'],
    ['2003', '2001', '2004']
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
  "answerSix",
  "answerSeven",
  "answerEight",
  "answerNine",
  "answerTen"
];

function displayQuestions() {
  const getQuizQuestions = chooseQuestions();
  console.log(getQuizQuestions)
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

