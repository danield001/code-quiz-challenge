var questionDiv = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var startBtn = document.getElementById("start-btn");
var startScreen = document.getElementById("start-screen");
var answerDisp = document.getElementById("answer");
var choicesDiv = document.getElementById('choices');
var answerCor = document.getElementById('answer-correct');
var answerInc = document.getElementById('answer-incorrect');
var endScreen = document.getElementById('end-screen');
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

var time = questions.length * 15;
var qPosition = 0
function start() {

    startScreen.classList.add('hide');

    questionDiv.classList.remove('hide');
    // add timer function


    renderQuestion()
}

function renderQuestion() {
    // render Question into Question Title
    questionTitle.textContent = questions[qPosition].title
    // create 4 buttons for answers
    // if asnwer is true, display true
    choicesDiv.innerHTML = ''
    for (var i = 0; i < questions[qPosition].choices.length; i++) {
        var answerBtn = document.createElement('button');
        answerBtn.textContent = questions[qPosition].choices[i];

        answerBtn.addEventListener('click', next)

        choicesDiv.appendChild(answerBtn);
    }
    //if asnwer is false, dont proceed to next question, and deduct 15 seconds to timer
}

function next() {
    console.log(this.textContent);
    if (this.textContent === questions[qPosition].answer) {
        console.log(true)
        answerInc.classList.add('hide');
        answerCor.classList.remove('hide');
       

    } else {
        console.log(false);
        answerCor.classList.add('hide');
        answerInc.classList.remove('hide');
        
    }
    qPosition++

    if (qPosition < questions.length) {
        renderQuestion()
    } else {
        questionDiv.classList.add('hide');
        endScreen.classList.remove('hide');


    }
}

startBtn.addEventListener('click', start);




