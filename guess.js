'use strict';
/*
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const newWidth = function (width) {
  document.querySelector('.number').style.width = width;
};

const newBackground = function (backgroundColor) {
  document.querySelector('body').style.backgroundColor = backgroundColor;
};

const displayNumber = function (secretNumber) {
  document.querySelector('.number').textContent = secretNumber;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('🚫 No number!');

    // when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct number!');

    newBackground('#60b347');
    newWidth('30rem');
    displayNumber(secretNumber);

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📉 Too low');
      score--;
      showScore(score);
    } else {
      displayMessage('💀 Game over!');
      showScore('0');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  showScore(score);
  displayNumber('?');
  newBackground('#222');
  newWidth('15rem');
  document.querySelector('.guess').value = '';
});

*/