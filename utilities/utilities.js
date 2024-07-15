const generateRandNum = (max = 100, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

module.exports = generateRandNum;
