import getCharacters from './characters';

class Password {
  constructor(str) {
    this.str = str;
    this.randomIndex = Math.floor(Math.random() * ((str.length - 1) + 1));
  }

  getRandomSymbol() {
    return this.str[this.randomIndex];
  }
}

const getPassword = (value) => {
  let password = '';
  let i = 1;
  while (i <= value) {
    const currentSymbol = new Password(getCharacters());
    password += currentSymbol.getRandomSymbol();
    i += 1;
  }
  return password;
};

export default getPassword;
