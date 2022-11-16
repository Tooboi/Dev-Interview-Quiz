//variable declaration
var startQuiz = document.querySelector("#buttStart");
var buttonA = document.querySelector("#buttA");
var buttonB = document.querySelector("#buttB");
var buttonC = document.querySelector("#buttC");
var buttonD = document.querySelector("#buttD");
var h1Question = document.querySelector("#questionVisible");
var timerUser = document.querySelector("#timerVisible");
var rulesText = document.querySelector("#ruleText");
var rightWrong = document.querySelector("#rightWrong");
var scoreBoard = document.querySelector("#scoreBoard");
var scoreLink = document.querySelector("#scoreBoardLink");
//set initial styles
scoreBoard.setAttribute("style", "display: none;");
rulesText.setAttribute("style", "display: block");
timerUser.textContent = " ";
h1Question.textContent = "Press start to test your web dev knowledge";
startQuiz.setAttribute("style", "margin: 0 auto; min-width: 20rem");
rightWrong.setAttribute("style", "color: #ffffff;");
buttonA.setAttribute("style", "display: none;");
buttonB.setAttribute("style", "display: none;");
buttonC.setAttribute("style", "display: none;");
buttonD.setAttribute("style", "display: none;");
//score area
var timeLeft = 120;
var currentQuestion = 0;
var questions = [
  {
    asking: "What does CSS stand for?",
    optionA: "Cascading Shader System",
    optionB: "Collapsing Style Sheets",
    optionC: "Circular Selection System",
    optionD: "Cascading Style Sheets",
    correct: "D",
  },
  {
    asking: "What tag would I use to create the largest header element in HTML?",
    optionA: "<p>",
    optionB: "<header>",
    optionC: "<h1>",
    optionD: "<div>",
    correct: "C",
  },
  {
    asking: "How would I push my code to the main branch on Github?",
    optionA: "git pull",
    optionB: "git push origin main",
    optionC: "git add -A",
    optionD: "git branch",
    correct: "B",
  },
  {
    asking: "What helpful items should my README file include?",
    optionA: "Screenshot",
    optionB: "Usage instructions",
    optionC: "Title",
    optionD: "All of the above",
    correct: "D",
  },
  {
    asking: "What surrounds an array?",
    optionA: "[ ]",
    optionB: "{ }",
    optionC: "( )",
    optionD: "< >",
    correct: "A",
  },
  {
    asking: "Which tag is used in HTML to link javascript code?",
    optionA: "<javascript>",
    optionB: "<sp>",
    optionC: "<script>",
    optionD: "<java>",
    correct: "C",
  },
  {
    asking: "What is always used with an image tag?",
    optionA: "size",
    optionB: "aspect-ratio",
    optionC: "src",
    optionD: "color",
    correct: "C",
  },
  {
    asking: "what does hex code look like?",
    optionA: "hsl (128, 20%, 90%)",
    optionB: "#332f05",
    optionC: "rgb (67, 33, 255)",
    optionD: "alpha",
    correct: "B",
  },
];
//sets the next question as the next currentQuestion integer
function nextQuestion() {
  showQuestion(questions[currentQuestion]);
}
//writes the next question and buttons
function showQuestion(questions) {
  h1Question.innerText = questions.asking;
  buttonA.innerText = questions.optionA;
  buttonB.innerText = questions.optionB;
  buttonC.innerText = questions.optionC;
  buttonD.innerText = questions.optionD;
}
//runs when you choose the correct answer
function correctAnswer() {
  rightWrong.setAttribute("style", "display: block; font-size: 2rem;");
  rightWrong.textContent = "Correct!";
  currentQuestion++;
  if (currentQuestion === questions.length) {
    highScoreScreen();
  } else {
    nextQuestion();
  }
  setTimeout(() => {
    rightWrong.setAttribute("style", "display: none;");
  }, 2000);
}
//runs when you choose the wrong answer
function wrongAnswer() {
  rightWrong.setAttribute("style", "display: block; font-size: 2rem;");
  rightWrong.textContent = "Wrong! -10";
  currentQuestion++;

  timeLeft -= 10;
  if (currentQuestion === questions.length) {
    highScoreScreen();
  } else {
    nextQuestion();
  }
  setTimeout(() => {
    rightWrong.setAttribute("style", "display: none;");
  }, 2000);
}
//displays score board and handles local storage
function highScoreScreen() {
  window.localStorage.setItem("finalScore", timeLeft);
  var nameOfPlayer = window.prompt("Nice job! Please enter your initials (ABC)");
  window.localStorage.setItem("name", nameOfPlayer);
  var finalName = window.localStorage.getItem("name");
  var finalScore = window.localStorage.getItem("finalScore");
  var list1 = document.querySelector("#li1");
  h1Question.innerText = "High Score";
  startQuiz.setAttribute("style", "display: none;");
  timerUser.setAttribute("style", "display: none;");
  scoreLink.setAttribute("style", "display: none;");
  h1Question.setAttribute("style", "text-align: center;");
  buttonA.setAttribute("style", "display: none;");
  buttonB.setAttribute("style", "display: none;");
  buttonC.setAttribute("style", "display: none;");
  buttonD.setAttribute("style", "display: none;");
  rightWrong.setAttribute("style", "display: none;");
  scoreBoard.setAttribute("style", "display: block;");
  rulesText.setAttribute("style", "display: none;");
  list1.textContent = finalName + " - " + finalScore;
}
//check if correct
function checkCorrectD(questions) {
  var correctChecked = questions[currentQuestion].correct;
  if (correctChecked === "D") {
    correctAnswer();
  } else {
    wrongAnswer();
  }
}
function checkCorrectC(questions) {
  var correctChecked = questions[currentQuestion].correct;
  if (correctChecked === "C") {
    correctAnswer();
  } else {
    wrongAnswer();
  }
}
function checkCorrectB(questions) {
  var correctChecked = questions[currentQuestion].correct;
  if (correctChecked === "B") {
    correctAnswer();
  } else {
    wrongAnswer();
  }
}
function checkCorrectA(questions) {
  var correctChecked = questions[currentQuestion].correct;
  if (correctChecked === "A") {
    correctAnswer();
  } else {
    wrongAnswer();
  }
}
//timer
function runTimer(interval) {
  timerUser.setAttribute("style", "display: block;");
  var interval = setInterval(function () {
    timeLeft--;
    timerUser.textContent = "Time: " + (timeLeft - 1);
    // when time is over
    if (timeLeft < 1 || currentQuestion === questions.length) {
      window.localStorage.setItem("finalScore", timeLeft);
      window.clearInterval(interval);
      highScoreScreen();
    }
  }, 1000);
}
//run the quiz
function runQuiz() {
  //run the timer
  runTimer();
  currentQuestion = 0;
  buttonA.setAttribute("style", "display: block;");
  buttonB.setAttribute("style", "display: block;");
  buttonC.setAttribute("style", "display: block;");
  buttonD.setAttribute("style", "display: block;");
  rulesText.setAttribute("style", "display: none;");
  scoreBoard.setAttribute("style", "display: none;");
  h1Question.setAttribute("style", "text-align: left;");
  scoreLink.setAttribute("style", "display: block;");
  timerUser.setAttribute("style", "display: block;");
  nextQuestion();
  //click on answer
  buttonA.addEventListener("click", function () {
    checkCorrectA(questions);
  });
  buttonB.addEventListener("click", function () {
    checkCorrectB(questions);
  });
  buttonC.addEventListener("click", function () {
    checkCorrectC(questions);
  });
  buttonD.addEventListener("click", function () {
    checkCorrectD(questions);
  });
}
scoreLink.addEventListener("click", function () {
  highScoreScreen();
});
// click start button to start game
startQuiz.addEventListener("click", function () {
  startQuiz.setAttribute("style", "display: none;");
  runQuiz();
});
