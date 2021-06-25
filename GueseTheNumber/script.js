"use strict";
const maxScore = 20;
const minScore = 0;
let score = maxScore;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let isOver = false;

const gameOver = function (condition) {
  isOver = true;
  displayMessage(condition);
  document.querySelector(".again").classList.remove("hidden");
  document.querySelector(".check").classList.add("hidden");
};

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  console.log(isOver);
  let guess = Number(document.querySelector(".guess").value);

  if (checkInput(guess)) {
    //guessed the number
    if (guess - secretNumber === 0) {
      gameOver(displayMessage("Congrats you won!!!🎉✨🧨🎆🎇"));
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").textContent = secretNumber;
      if (highScore < score) {
        highScore = score;
        document.querySelector(".highscore").textContent = highScore;
      }
    } else {
      guess - secretNumber < 0
        ? displayMessage("🗽My number is higher!🗽")
        : displayMessage("↙My number is lower↘");
      score--;
    }
  } else {
    displayMessage("-2points panalty for bad input");
    score -= 2;
  }
  if (score <= 0) {
    gameOver(`You lost! ${score} score`);
  }
  document.querySelector(".score").textContent = score;
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".again").classList.add("hidden");
  document.querySelector(".check").classList.remove("hidden");
  isOver = false; //enable check button
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generate new number
  score = maxScore; //reset score counter
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = ""; //empty the box
  displayMessage("Lets play the game!🎰"); //reset the message
  document.querySelector("body").style.backgroundColor = "#222"; //reset the background
});

function checkInput(guess) {
  if (!(0 < guess && guess <= 20)) {
    return false;
  } else {
    return true;
  }
}
