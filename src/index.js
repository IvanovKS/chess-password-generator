import '@babel/polyfill';
import './index.html';
import './index.scss';
import RANGE from './modules/length';
import getPassword from './modules/generator';

const CHECKBOX = document.querySelectorAll('input[type="checkbox"]');
const PASSWORD_VALUE = document.querySelector('.password-value p');
const RESET = document.querySelector('.password-value button');
const COPY = document.querySelector('.copy');
const COPIED = document.querySelector('.generator-value img');

RANGE.addEventListener('change', () => {
  PASSWORD_VALUE.textContent = getPassword(RANGE.value);
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
