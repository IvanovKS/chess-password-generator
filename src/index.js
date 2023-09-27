import '@babel/polyfill';
import './index.html';
import './index.scss';
import pawn from './img/pawn.png';
import horse from './img/horse.png';
import queen from './img/queen.png';
import RANGE from './modules/length';
import getPassword from './modules/generator';
import getDifficultyClass from './modules/difficulty';

const CHECKBOX = document.querySelectorAll('input[type="checkbox"]');
const PASSWORD_VALUE = document.querySelector('.password-value p');
const RESET = document.querySelector('.password-value button');
const COPY = document.querySelector('.copy');
const COPIED = document.querySelector('.generator-value img');
const DIFFICULTY_VALUE = document.querySelector('.difficulty p');
const DIFFICULTY_IMG = document.querySelector('.difficulty div img');

const difficultyPath = {
  weak: pawn,
  good: horse,
  strong: queen,
};

const useDifficultyClass = (value) => {
  DIFFICULTY_VALUE.classList = [];
  DIFFICULTY_VALUE.classList.add(value);
  DIFFICULTY_VALUE.textContent = value.charAt(0).toUpperCase() + value.slice(1);
  DIFFICULTY_IMG.src = difficultyPath[value];
};

RANGE.addEventListener('change', () => {
  PASSWORD_VALUE.textContent = getPassword(RANGE.value);
  useDifficultyClass(getDifficultyClass(RANGE.value));
});

CHECKBOX.forEach((el) => {
  el.addEventListener('change', () => {
    PASSWORD_VALUE.textContent = getPassword(RANGE.value);
  });
});

RESET.addEventListener('click', () => {
  PASSWORD_VALUE.textContent = getPassword(RANGE.value);
});

COPY.addEventListener('click', () => {
  const textToCopy = PASSWORD_VALUE.textContent;
  navigator.clipboard.writeText(textToCopy);
  if (PASSWORD_VALUE.textContent !== '') {
    COPY.style.display = 'none';
    COPIED.style.display = 'block';
    setTimeout(() => {
      COPIED.style.display = 'none';
      COPY.style.display = '';
    }, 1500);
  }
});
