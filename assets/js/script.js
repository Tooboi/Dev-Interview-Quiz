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
var rightWrong = document.querySelector("#rightWrong")
rulesText.setAttribute("style", "display: block;");
timerUser.textContent = " ";
h1Question.textContent = "Press start to test your web dev knowledge";
startQuiz.setAttribute("style", "margin: 0 auto; min-width: 20rem");
buttonA.setAttribute("style", "display: none;");
buttonB.setAttribute("style", "display: none;");
buttonC.setAttribute("style", "display: none;");
buttonD.setAttribute("style", "display: none;");
var timeLeft = 120;
var score = {
    playerName: [],
    playerScore: []
};
var currentQuestion = 0;
var questions = [
    {
        asking: "What does CSS stand for?",
        optionA: "Cascading Shader System",
        optionB: "Collapsing Style Sheets",
        optionC: "Circular Selection System",
        optionD: "Cascading Style Sheets",
        correct: "D"
    },
    {
        asking: "What tag would I use to create the largest header element in HTML?",
        optionA: "<p>",
        optionB: "<header>",
        optionC: "<h1>",
        optionD: "<div>",
        correct: "C"
    }
]



//start the timer
function runTimer() {
    console.log("runTimer has run");
    var interval = setInterval(function() {
        timerUser.textContent = "Time: " + timeLeft;
        timeLeft--;
        // when time is over
        if (timeLeft === 0) {
            clearInterval(interval);
        }
        //length of time interval in ms
    }, 1000);
}
//sets the next question as the next currentQuestion integer
function nextQuestion() {
 showQuestion(questions[currentQuestion]);
}
//writes the next question and buttons
function showQuestion(questions) {
    h1Question.innerText = questions.asking
    buttonA.innerText = questions.optionA
    buttonB.innerText = questions.optionB
    buttonC.innerText = questions.optionC
    buttonD.innerText = questions.optionD
}

//check if correct 
function checkCorrectD(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "D") {
        console.log("correct!");
    } else {
        console.log("wrong!");
    }
}
function checkCorrectC(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "C") {
        console.log("correct!");
    } else {
        console.log("wrong!");
    }  
}
function checkCorrectB(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "B") {
        console.log("correct!");
    } else {
        console.log("wrong!");
    }  
}
function checkCorrectA(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "A") {
        console.log("correct!");
    } else {
        console.log("wrong!");
    }  
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
    nextQuestion()
    console.log("Question: " + currentQuestion);
    //click on answer
    buttonA.addEventListener("click", function() {
        console.log("it b click A");
        checkCorrectA(questions)
    })
    buttonB.addEventListener("click", function() {
        console.log("it b click B");
        checkCorrectB(questions)
    })
    buttonC.addEventListener("click", function() {
        console.log("it b click C");
        checkCorrectC(questions)
    })
    buttonD.addEventListener("click", function() {
        console.log("it b click D");
        checkCorrectD(questions)
    })
    //check if correct
    
    //display right or wrong

    //add to score

    //update time

    //go to next question
    // currentQuestion++;

}
// click start button to start game
startQuiz.addEventListener("click", function() {
    console.log("clicked start");
    startQuiz.setAttribute("style", "display: none;");
    runQuiz();
});