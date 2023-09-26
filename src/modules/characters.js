const objectOfCharacters = {
  123: '0123456789',
  abc: 'abcdefghijklmnopqrstuvwxyz',
  ABC: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  symbols: '!#$%&()*+,-.:;<=>?@[]^_{|}~',
};

const getCharacters = () => {
  const CHARACTERS = document.querySelectorAll('input:checked[type="checkbox"]');
  let currentCharacters = '';
  if (CHARACTERS.length === 1) {
    CHARACTERS.forEach((el) => {
      el.setAttribute('disabled', 'true');
      currentCharacters = objectOfCharacters[el.id];
    });
  } else {
    CHARACTERS.forEach((el) => {
      el.removeAttribute('disabled');
      const key = el.id;
      if (Object.prototype.hasOwnProperty.call(objectOfCharacters, key)) {
        currentCharacters += objectOfCharacters[key];
      }
    });
  }
  return currentCharacters;
};

export default getCharacters;
