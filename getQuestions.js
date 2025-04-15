
// Cleans up and capitalizes the answers
function cleanAndCap(str) {
  if (!str) return null;
  let temp = str.trim();
  return temp[0].toUpperCase() + temp.substring(1);
}

//Determines what quiz questions to display based on user choice
const chooseQuestions = () => {
    //Grabs values from submitted form in URL
    const userChoice = new URLSearchParams(window.location.search);
    const category = cleanAndCap(userChoice.get("quizSelection"))
    // Creates variable to hold quiz set number
    let quizSet = 0;
    // correctly assigns quiz set value based on user choice
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

// Creates array to hold quiz questions
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
    "What is the term for three strikes in a row in bowling?",
    "How many holes are played in a standard round of golf?",
    "What is the traditional surface for Wimbledon tennis matches?",
    "Which country won the first FIFA World Cup in 1930?",
    "Who is the Premier League’s all-time top scorer?",
    "Which nation has reached three World Cup finals but never won?",
    "Who was the captain of Spain when they won the 2010 World Cup?",
    "How many Olympic rings are there?",
    "How many events are there in a decathlon?",
    "How long is a marathon in kilometers?"
  ],
];

// Creates array to hold quiz answers
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
    ["Strike", "Turkey", "Spare"],
    ["Henry Ford", "18", "Henry M. Leland"],
    ["Sand", "Concrete", "Grass"],
    ["Germany", "Uruguay", "Spain"],
    ["Mohammed Salah", "Steven Gerrard", "Alan Shearer"],
    ['England', 'Italy', 'The Netherlands'],
    ['David Villa', 'Fernando Torres', 'Iker Casillas'],
    ["Five", "Eight", "Ten"],
    ['10', '8', '12'],
    ['40.520km', '42.195km', '38.185km']


  ],
];

// Creates array of answer input field IDs based on the number of answers in selected quiz
const answerIds = answers[chooseQuestions()].map((a, i) => `answer${i+1}` );

// Returns quiz form
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

//Creates form element
const formContainer = document.createElement("form");

formContainer.action = "review.html";
formContainer.method = "get";

// Adds quiz to form container
formContainer.innerHTML = displayQuestions();

//Adds form element to page
document.body.appendChild(formContainer);

