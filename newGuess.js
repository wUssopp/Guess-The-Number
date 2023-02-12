'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

let num = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('🚫 No number!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    num.style.width = '30rem';
    num.textContent = secretNumber;
    if (score > highscore) highscore = score;

    document.querySelector('.highscore').textContent = highscore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      showScore(score);
    } else {
      displayMessage('💀 Game over...');
      showScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayMessage('Start guessing...');
  showScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  num.style.width = '15rem';
  document.querySelector('.guess').value = '';
  num.textContent = '?';
});
