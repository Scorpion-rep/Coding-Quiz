// set variables to the elements
// Start section
const start = document.querySelector("#start");

// Quiz Section
const quiz = document.querySelector("#quiz");
const time = document.querySelector("#time");
const timeEl = document.querySelector("#time");

// Question Section
const questionEl = document.querySelector("#question");
const answerEls = document.querySelectorAll(".answer");
// Multiple choices of answers
const a_text = document.querySelector("#a_text");
const b_text = document.querySelector("#b_text");
const c_text = document.querySelector("#c_text");
const d_text = document.querySelector("#d_text");

// total correct answers and next button
const total_correct = document.querySelector("#total_correct");
const nextBtn = document.querySelector("#next");

let currentQuiz = 0;
let score = 0;

// Result Section
//let points = document.querySelector("#points");
//let result =  document.querySelector("#result");
//let startAgain = document.querySelector("#startAgain");
//let quit = document.querySelector("#quit");

//Get all the elements from choice list
//let btn = document.querySelector(".btn");

let index = 0;
let timeRemaining = 0;
let intervalId = null;

// store the answer value
let answer = undefined;

function startTimer() {
    intervalId = setInterval(function () {
        console.log();
        timeRemaining = timeRemaining -1;
        
        if (timeRemaining < 0) {
            return endGame();
        }
        //update timer div
        timeEl.textContent = timeRemaining
    }, 1500);
}

// when start button is clicked. timer has starts 
start.addEventListener("click", ()=>{
    startTimer()
    quiz.style.display = "block";
    start.style.display = "none";
    
});

// loading question list when the page is opened

loadQuiz();
// function to load questions
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

// what happens if the choice is selected
function getSelected() {
   // console.log("hi");
    
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

// Need to deselect the answer when move to next question
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false 
        
    });
}

// when Next button is clicked: check if answer is selected, loop throu all questions
nextBtn.addEventListener("click", () => {
    // total points
    
    const answer = getSelected();
   
  //  console.log(answer);

    if(answer) {

        if(answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) {
            loadQuiz();

        } else {
            quiz.innerHTML = `<h4>You answered correctly at ${score}/${quizData.length}question.</h4>`;
        }    
    }

   
});


