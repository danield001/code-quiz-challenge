
var savedScores = document.getElementById('saved-scores');

document.addEventListener('DOMContentLoaded', function () {
  printHighscores();
});

function printHighscores() {
  var score = JSON.parse(localStorage.getItem('gameScore'));
  if (score) {
    var listItem = document.createElement('li');
    listItem.innerHTML = '<span>' + "Players Name: " + score.initials + '</span><span>' + " | Time: " + score.count + '</span>';
    savedScores.appendChild(listItem);
  }
}

function clearHighscores() {
  localStorage.clear();
}

document.getElementById("clear").onclick = clearHighscores;


