import '@babel/polyfill';
import './index.html';
import './index.scss';
import RANGE from './modules/length';
import getPassword from './modules/generator';

RANGE.addEventListener('change', () => {
  console.log(RANGE.value);
  console.log(getPassword(RANGE.value));
});
