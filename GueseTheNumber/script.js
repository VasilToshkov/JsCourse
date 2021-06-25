'use strict';
const maxScore = 20;
const minScore = 0;
let score = maxScore;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameOver = false;
//action when click on check button
// 1. get the value from the box✔
//  1.1 validate the input
// 2.has to check if its corect number
//  2.1 if correct
//    2.1.1 end the game
//  2.2 if wrong
//   2.2.1 lower guess
//   2.2.2 higher guess

//show the secret number for tests
//document.querySelector('.number').textContent = secretNumber;
//this is the game logic for checkButton
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //disable check Button if game is over
  if (gameOver) {
    return;
  }
  if (checkInput(guess)) {
    //1lower number input
    if (guess - secretNumber < 0) {
      document.querySelector('.message').textContent =
        '🗽My number is higher!🗽';
      score--;
    }
    //higher number input
    if (guess - secretNumber > 0) {
      document.querySelector('.message').textContent = '↙My number is lower↘';
      score--;
    }
    //guessed the number
    if (guess - secretNumber === 0) {
      gameOver = true;
      document.querySelector('.message').textContent =
        'Congrats you won!!!🎉✨🧨🎆🎇';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      if (highScore < score) {
        highScore = score;
        document.querySelector('.highscore').textContent = highScore;
      }
    }
  } else {
    document.querySelector('.message').textContent =
      '-2points panalty for bad input';
    score -= 2;
  }
  document.querySelector('.score').textContent = score;
});

document.querySelector('.again').addEventListener('click', function () {
  gameOver = false; //enable check button
  secretNumber = Math.trunc(Math.random() * 20) + 1; //generate new number
  score = maxScore; //reset score counter
  document.querySelector('.guess').value = ''; //reset score shown
  document.querySelector('.score').textContent = score; //empty the guessing box
  document.querySelector('.message').textContent = 'Lets play the game!🎰'; //reset the message
  document.querySelector('body').style.backgroundColor = '#222'; //reset the background
});

function checkInput(guess) {
  if (!(0 < guess && guess <= 20)) {
    console.log('invalid input');
    return false;
  } else {
    return true;
  }
}
