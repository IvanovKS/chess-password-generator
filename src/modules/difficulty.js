const getDifficultyClass = (value) => {
  let difficulty;
  if (value <= 10) {
    difficulty = 'weak';
  }
  if (value < 20 && value > 10) {
    difficulty = 'good';
  }
  if (value >= 20) {
    difficulty = 'strong';
  }
  return difficulty;
};

export default getDifficultyClass;
