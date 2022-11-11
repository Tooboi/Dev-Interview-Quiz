// AS A coding boot camp student
// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
// SO THAT I can gauge my progress compared to my peers

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score


//variable declaration
var startQuiz = document.querySelector("#buttStart");
var buttonA = document.querySelector("#buttA");
var buttonB = document.querySelector("#buttB");
var buttonC = document.querySelector("#buttC");
var buttonD = document.querySelector("#buttD");
var h1Question = document.querySelector("#questionVisible");
var timerUser = document.querySelector("#timerVisible")
var rulesText = document.querySelector("#ruleText")
rulesText.setAttribute("style", "display: block;");
timerUser.textContent = " ";
h1Question.textContent = "Press start to test your web dev knowledge";
startQuiz.setAttribute("style", "margin: 0 auto; min-width: 20rem");
buttonA.setAttribute("style", "display: none;");
buttonB.setAttribute("style", "display: none;");
buttonC.setAttribute("style", "display: none;");
buttonD.setAttribute("style", "display: none;");
var timeLeft = 100;
var score = {
    playerName: [],
    playerScore: []
};
var questions = {
    asking: [],
    choiceA: [],
    choiceB: [],
    choiceC: [],
    choiceD: [],
    answerCorrect: []
};


//start the timer
function runTimer() {
    var interval = setInterval(function() {
        // timeRemaining--;
        timerUser.textContent = "Time: " + timeLeft;
    })
}



//run the quiz
function runQuiz() {
    runTimer();
    console.log("runQuiz has run");
    buttonA.setAttribute("style", "display: block;");
    buttonB.setAttribute("style", "display: block;");
    buttonC.setAttribute("style", "display: block;");
    buttonD.setAttribute("style", "display: block;");
    rulesText.setAttribute("style", "display: none;");
    h1Question.textContent = questions.asking[i];
}
// click start button to start game
startQuiz.addEventListener("click", function() {
    console.log("click");
    startQuiz.setAttribute("style", "display: none;");
    runQuiz();
});
