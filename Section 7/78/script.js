'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const messageDisplay = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againBtn = document.querySelector('.again');
const highScoreDisplay = document.querySelector('.highscore');

highScoreDisplay.textContent = 0;

const changeDisplayMessage = message => {
  messageDisplay.textContent = message;
};

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    changeDisplayMessage('⛔️ No number!');
  } else if (guess === secretNumber) {
    changeDisplayMessage('🎉 Correct Number!');
    numberDisplay.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      highScoreDisplay.textContent = highScore;
    }
  } else {
    const message = guess > secretNumber ? '📈 Too high' : '📉 Too low';
    if (score > 1) {
      changeDisplayMessage(message);
      score--;
      scoreDisplay.textContent = score;
    } else {
      changeDisplayMessage('💥 You lost the game!');
      scoreDisplay.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  changeDisplayMessage('Start guessing...');
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});
