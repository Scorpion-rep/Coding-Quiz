// set variables to the elements
let startGameButton = document.getElementById("start-btn");
let quizSection = document.getElementById("quiz-section");
let landingSection = document.getElementById("landing-section");
let timerEl = document.getElementById("timer");



let intervalId = null;
let timeRemaining = 10;

// set timer for question page
function startTimer(){
    intervalId = setInterval(function () {
        console.log();
        timeRemaining = timeRemaining -1;

        if(timeRemaining < 0) {
            return endGame();
        }
        // update the timer div
        timerEl.textContent = timeRemaining;
    }, 1500);
}


//when start button is clicked, shows landing page
// starts
startGameButton.addEventListener("click", function(event){
    event.defaultPrevented();
// 1. Timer will start
    startTimer()
    // 2. question page shows up
    quizSection.classList.remove("hide");
    // Hide the landing page when question section shows up
    landingSection.classList.add("hide");
})

//open the ending Section and close quiz section
function nameSubmit() {
  //1. stop the timer
  clearInterval(intervalId);
  
    endingSection.classList.remove("hide");

    quizSection.classList.add("hide");
//}

const highscoreSection = document.getElementById("highscore-section")
const endingSection = document.getElementById("ending-section")

// High score section shows after the game finished
function endGame() {
    
    //2. show the high score page
    highscoreSection.classList.remove("hide");
    
    endingSection.classList.add("hide");
}

//redirect to landing page
function


//const questionEl = document.getElementById('question');
//const a_text = document.getElementById('a_text');
//const b_text = document.getElementById('b_text');
//const c_text = document.getElementById('c_text');
//const d_text = document.getElementById('d_text');

//Question page
//set up questions 
//let quizData = [
//    {
//        question: 'What does HTML stand for?',
//        a: 'Hyper Text Multiple Language',
//        b: 'Hyper Tool Multi Language',
//        c: 'Hyper Text Markup Language',
//        d: 'Hyper Text Mini Language',
//        correct: 'c',
//    },  {
//        question: 'What is the most used programming language in 2021?',
//        a: 'Java',
//        b: 'Python',
//        c: 'JavaSript',
//        d: 'Jquery',
//        correct: 'b',
//
//    }, {
//        question: 'Which of the following is not a programming language?',
//        a: 'TypeScript',
//        b: 'Anaconda',
//        c: 'JavaSript',
//        d: 'C++',
//        correct: 'b',
//    }, {
//        question: 'Commonly used data types DO NOT include: ',
//        a: 'String',
//        b: 'Boolean',
//        c: 'Number',
//        d: 'Alert',
//        correct: 'b',
//    }
//] 

//when we click on choice button

//need to check if button clicked is the correct choice

//is correct:
//show a message or pop up box that the choice is correct
//move on to the next question

//if wrong:
//move to next question
//deduct time from timer
//show a message that the choice is incorrect

// When we end the game
// 1. if user on the last question
// after user click on the choice
// 2. timer runs out

//Ending Page-High score page
//when form is submitted
//we want to save the highscore
//direct to the landing