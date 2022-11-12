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
var timerUser = document.querySelector("#timerVisible");
var rulesText = document.querySelector("#ruleText");
var rightWrong = document.querySelector("#rightWrong");
var scoreBoard = document.querySelector("#scoreBoard");
var tryAgain = document.querySelector("#tryAgainButt");
var scoreLink = document.querySelector("#scoreBoardLink")
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
    },
    {
        asking: "How would I push my code to the main branch on Github?",
        optionA: "git pull",
        optionB: "git push origin main",
        optionC: "git add -A",
        optionD: "git branch",
        correct: "B"
    },
    {
        asking: "What helpful items should my README file include?",
        optionA: "Screenshot",
        optionB: "Usage instructions",
        optionC: "Title",
        optionD: "All of the above",
        correct: "D"
    },
    {
        asking: "What does HTML stand for?",
        optionA: "Hypertext Markup Language",
        optionB: "Handy Text Maximum Language",
        optionC: "How The Moon Looks",
        optionD: "Hierarchy Toned Making Linguistics",
        correct: "A"
    },
    {
        asking: "Which tag is used in HTML to link javascript code?",
        optionA: "<javascript>",
        optionB: "<sp>",
        optionC: "<script>",
        optionD: "<java>",
        correct: "C"
    },
    {
        asking: "What is always used with an image tag?",
        optionA: "size",
        optionB: "aspect-ratio",
        optionC: "src",
        optionD: "color",
        correct: "C"
    },
    {
        asking: "what does hex code look like?",
        optionA: "hsl (128, 20%, 90%)",
        optionB: "#332f05",
        optionC: "rgb (67, 33, 255)",
        optionD: "alpha",
        correct: "B"
    }
]
//start the timer
function runTimer() {
    var interval = setInterval(function() {
        timerUser.textContent = "Time: " + timeLeft;
        timeLeft--;
        // when time is over
        if (timeLeft < 1) {
            window.localStorage.setItem('finalScore', timeLeft)
            highScoreScreen()
            clearInterval(interval);
        }
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
//runs when you choose the correct answer
function correctAnswer() {
    rightWrong.setAttribute("style", "display: block; font-size: 2rem;");
    rightWrong.textContent = "Correct!"
    currentQuestion++;
    console.log("Question: " + currentQuestion);
    if (currentQuestion === questions.length) {
        window.localStorage.setItem('finalScore', timeLeft)
        highScoreScreen()
    } else {
        nextQuestion()
    }
    setTimeout(() => {
        rightWrong.setAttribute("style", "display: none;");
    }, 3000)
}
//runs when you choose the wrong answer
function wrongAnswer() {
    rightWrong.setAttribute("style", "display: block; font-size: 2rem;");
    rightWrong.textContent = "Wrong! -10"
    currentQuestion++;
    console.log("Question: " + currentQuestion);
    timeLeft -= 10;
    if (currentQuestion === questions.length) {        
        window.localStorage.setItem('finalScore', timeLeft)
        highScoreScreen()
    } else {
        nextQuestion()    
    }
    setTimeout(() => {
    rightWrong.setAttribute("style", "display: none;");
    }, 3000)
}
function highScoreScreen() {
    h1Question.innerText = "High Scores";
    timerUser.setAttribute("style", "display: none;");
    scoreLink.setAttribute("style", "display: none;");
    h1Question.setAttribute("style", "text-align: center;");
    buttonA.setAttribute("style", "display: none;");
    buttonB.setAttribute("style", "display: none;");
    buttonC.setAttribute("style", "display: none;");
    buttonD.setAttribute("style", "display: none;");
    scoreBoard.setAttribute("style", "display: block;");
}
//check if correct 
function checkCorrectD(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "D") {
        correctAnswer()
    } else {
        wrongAnswer()
    }
}
function checkCorrectC(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "C") {
        correctAnswer()
    } else {
        wrongAnswer()
    }  
}
function checkCorrectB(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "B") {
        correctAnswer()
    } else {
        wrongAnswer()
    }  
}
function checkCorrectA(questions) {
    var correctChecked = questions[currentQuestion].correct
    if (correctChecked === "A") {
        correctAnswer()
    } else {
        wrongAnswer()
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
}
scoreLink.addEventListener("click", function() {
    console.log("clicked score link");
    highScoreScreen();
});
// click start button to start game
startQuiz.addEventListener("click", function() {
    console.log("clicked start");
    startQuiz.setAttribute("style", "display: none;");
    runQuiz();
});

//click try again button
// tryAgain.addEventListener("click", function() {
//     console.log("clicked try again");
//     window.location.href = "./index.html";
//     runQuiz();
// });
