import "@babel/polyfill";
import './index.html';
import './index.scss';
import { sum } from './modules/calc';

console.log(sum(3, 5));