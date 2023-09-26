import '@babel/polyfill';
import './index.html';
import './index.scss';
import RANGE from './modules/length';

RANGE.addEventListener('change', () => {
  console.log(RANGE.value);
});
