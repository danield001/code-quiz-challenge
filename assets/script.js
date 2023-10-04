/*var answer = document.getElementById("button");
var timer = document.getElementById("timer");
var start = document.getElementById("start");

function init(){
    if(element.matches("div")){
        var state = element.getAttribute("data-state")

        if (state === "hidden"){
            element.display = none;
        }
    }

    if(data-set === "hidden"){

    }
}


function checkAnswer() {

if (answer.value === "true"){
    console.log("true");
    
}

else {
    console.log("false");
}
}


function timerStart(){
    let count = 0;
    if (count < 70, count++){
        timer.setAttribute = timer + count;
    }
    else (count > 70){
        timer.setAttribute = "Time Up";
    }
} 1000;

answer.addEventListener('click', checkAnswer);

start.addEventListener('click', timerStart);



 const = document.getElementById('start-btn');


function startGame(){

}

function setNextQuestion(){

}

function selectAnswer(){

} */


var questionTitle = document.getElementById("questions");
var startBtn = document.getElementById("start-btn");
var time = questions.length * 15;
var questions = [
    {
        title: 'Commonly used data types DO NOT include:',
        choices: ['strings', 'booleans', 'alerts', 'numbers'],
        answer: 'alerts',
    },
    {
        title: 'The condition in an if / else statement is enclosed within ____.',
        choices: ['quotes', 'curly brackets', 'parentheses', 'square brackets'],
        answer: 'parentheses',
    },
    {
        title: 'Arrays in JavaScript can be used to store ____.',
        choices: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        answer: 'all of the above',
    },
    {
        title: 'String values must be enclosed within ____ when being assigned to variables.',
        choices: ['commas', 'curly brackets', 'quotes', 'parentheses'],
        answer: 'quotes',
    },
    {
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: ['JavaScript', 'terminal / bash', 'for loops', 'console.log'],
        answer: 'console.log',
    },

];

function renderQuestion() {



    for (var i = 0; i < questions.length; i++) {
        questionTitle.textContent = questions[i];


    }
}

startBtn.addEventListener('click', renderQuestion);

nextBtn.addEventListener('click', renderQuestion);
