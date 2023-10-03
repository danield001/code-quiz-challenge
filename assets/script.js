var answer = document.getElementById("button");
var timer = document.getElementById("timer");

function init(){
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

function timerStart(event){
    for (i=0, i<70, i++){
        timer.setAttribute = (timer + i);
        console.log = timer; 
    }

}

answer.addEventListener('click', checkAnswer);
