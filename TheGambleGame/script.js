'use strict';
//buttons
const rowButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');
const winningScore = 100;

//players
const player1 = document.querySelector(`.player--0`);
const player2 = document.querySelector(`.player--1`);

//scores
const scorePl1Element = document.getElementById('score--0');
const scorePl2Element = document.getElementById('score--1');
const currentScore1Element = document.getElementById('current--0');
const currentScore2Element = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
let activePlayer;
let scores;
let currentScore;
let activeGame;

const loadGame = function () {
  activeGame = true;
  currentScore = 0;
  scores = [0, 0];
  activePlayer = 0;

  diceElement.classList.add('hidden');

  player1.classList.add('player--active');
  player2.classList.remove('player--active');

  player2.classList.remove('player--winner');
  player1.classList.remove('player--winner');

  scorePl1Element.textContent = 0;
  scorePl2Element.textContent = 0;
  currentScore2Element.textContent = 0;
  currentScore1Element.textContent = 0;
};

const activePlayerElement = function () {
  return document.querySelector(`.player--${activePlayer}`);
};
const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = (activePlayer + 1) % 2;
  player1.classList.toggle('player--active');
  player2.classList.toggle('player--active');
};

loadGame();

const throwDice = function () {
  if (!activeGame) {
    return;
  }
  const dice = Math.trunc(Math.random() * 6) + 1;
  //display the dice score
  if (diceElement.classList.contains('hidden')) {
    diceElement.classList.remove('hidden');
  }
  //show the picture
  diceElement.src = `dice-${dice}.png`;

  if (dice === 1) {
    //switch next player
    switchPlayer();
  } else {
    //add to current score
    currentScore += dice;
    //display the score
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  }
};

const holdScore = function () {
  if (!activeGame) {
    return;
  }
  //stash the score
  scores[activePlayer] += currentScore;
  document.getElementById(`score--${activePlayer}`).textContent =
    scores[activePlayer];
  //check for win
  if (scores[activePlayer] >= winningScore) {
    //win
    activePlayerElement().classList.add('player--winner');
    activePlayerElement().classList.remove('player--active');
    diceElement.src = `winner.gif`;
    activeGame = false;
  } else {
    //switch player
    switchPlayer();
  }
};

const startNewGame = function () {
  if (activeGame) {
    return;
  }
  loadGame();
};
rowButton.addEventListener('click', throwDice);
holdButton.addEventListener('click', holdScore);
newGameButton.addEventListener('click', startNewGame);
