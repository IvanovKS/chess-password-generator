const RANGE = document.querySelector('input[type="range"]');

const rangeValue = () => {
  const newValue = RANGE.value;
  const TARGET = document.querySelector('.password-length span');
  TARGET.textContent = newValue;
};

RANGE.addEventListener('input', rangeValue);
export default RANGE;
