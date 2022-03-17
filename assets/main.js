// confirm ("Are you ready to Begin?")
var startBtn = document.getElementById("start-btn");
var highBtn = document.getElementById("hs-btn");
var nextBtn = document.getElementById("nxt-btn");
var timerEl = document.getElementById("timerEl");
var questionContEl = document.getElementById("question-container");
var questionEl = document.getElementById ("question")
var answersEl = document.getElementById ("answer-btns")
var randomQuest , currentQuestion

// Array of questions
var questions = [
    {
        question: "What is 2 + 2 ?", 
        answers: [
            {text: "4", correct: true} , 
            {text: "22", correct: false},
            {text: "22", correct: false}, 
            {text: "22", correct: false} 
        ]
        } ,
        {
            question: "What did one farmer say to the other farmer ?", 
            answers: [
                {text: "How's your Farm", correct: true} , 
                {text: "Give me a pig", correct: false},
                {text: "I got a shotty full of blue shells", correct: false}, 
                {text: "Get off my lawn", correct: false} 
            ]
            } ,
            {
                question: "What is 2 + 2 ?", 
                answers: [
                    {text: "4", correct: true} , 
                    {text: "3", correct: false},
                    {text: "6", correct: true} ,
                    
                ]
                } ,
                {
                    question: "Who is Batman?", 
                    answers: [
                         
                        {text: "Peter Parker", correct: false},
                        {text: "Thomas Wayne", correct: false}, 
                        {text: "Bruce Wayne", correct: true} ,
                        {text: "Tony Stark", correct: false} 
                    ]
                    } , 
                    {
                        question: "What is 2 + 2 ?", 
                        answers: [
                            {text: "4", correct: false} , 
                            {text: "22", correct: false},
                            {text: "22", correct: true}, 
                            {text: "22", correct: false} 
                        ]
                        }
]

// Countdown Timer for the Quiz

var currentTime = 60;

// Game functions

    startBtn.addEventListener("click", startGame);
    nextBtn.addEventListener("click", () => {
        currentQuestion++
        nextQuestion()
    })

    function startGame () {
        // var scoreCorrect = localStorage.getItem("0");

        startBtn.classList.add("hide");
        randomQuest = questions.sort(() => Math.random() - .5);
        currentQuestion = 0
        questionContEl.classList.remove ("hide");
    nextQuestion ()

    let timerId = setInterval (countDown, 1000)

    function countDown () {
        currentTime --
        timerEl.textContent = currentTime
        
            if(currentTime === 0 ) {
        clearInterval (timerId)
        // alert("Your score is" + result);
        window.alert ("Game over")
            }
        }

    }
    function nextQuestion() {
        resetState ()
displayQuestion(randomQuest[currentQuestion]);
    }
  
function displayQuestion (question) {

    questionEl.innerText = question.question
    question.answers.forEach (answer => {
        let button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add ("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", answerSelect)
        answersEl.appendChild(button)
    })
}
function resetState() {
    nextBtn.classList.add("hide")
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}
    function answerSelect(e){
var selectedBtn = e.target
var correct = selectedBtn.dataset.correct

setClass(document.body, correct)

Array.from (answersEl.children).forEach (button => {
    setClass(button, button.dataset.correct)
    // if (answer.correct ===true){
    //     scoreCorrect++
    // }
})

if (questions.length > currentQuestion + 1){
    nextBtn.classList.remove("hide")
}else {
    highBtn.classList.remove("hide")
}

function setClass(element, correct) {
    clearClass(element)
    if (correct) {
      element.classList.add('correct')
    
    } else {
      element.classList.add('wrong')
   
    }
  }
  function clearClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }
    }