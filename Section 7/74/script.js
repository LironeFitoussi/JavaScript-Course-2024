'use strict';
const secretNumber = Math.trunc(Math.random() * 20) + 1;
const message = document.querySelector('.message');
let score = 20;

let userScore = document.querySelector('.score');

document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  if (!guess) {
    message.textContent = '⛔️ No number!';
  } else if (guess === secretNumber) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (score > 1) {
      message.textContent = '📈 Too high';
      score--;
      userScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      message.textContent = '📉 Too low';
      score--;
      userScore.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
    }
  }
});
