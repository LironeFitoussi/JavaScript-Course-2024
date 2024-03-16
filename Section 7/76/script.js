'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const numberDisplay = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const messageDisplay = document.querySelector('.message');
const scoreDisplay = document.querySelector('.score');
const checkButton = document.querySelector('.check');
const againBtn = document.querySelector('.again');

checkButton.addEventListener('click', function () {
  const guess = Number(guessInput.value);
  // console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    messageDisplay.textContent = '⛔️ No number!';

    // When player wins
  } else if (guess === secretNumber) {
    messageDisplay.textContent = '🎉 Correct Number!';
    numberDisplay.textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    numberDisplay.style.width = '30rem';

    // When guess is too high or too low
  } else {
    const message = guess > secretNumber ? '📈 Too high' : '📉 Too low';
    if (score > 1) {
      messageDisplay.textContent = message;
      score--;
      scoreDisplay.textContent = score;
    } else {
      messageDisplay.textContent = '💥 You lost the game!';
      scoreDisplay.textContent = 0;
    }
  }
});

againBtn.addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  messageDisplay.textContent = 'Start guessing...';
  scoreDisplay.textContent = score;
  numberDisplay.textContent = '?';
  guessInput.value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  numberDisplay.style.width = '15rem';
});
