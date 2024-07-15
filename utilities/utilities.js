const generateRandNum = (max = 100, min = 1) => {
  // * you can export from here if you want
  return Math.floor(Math.random() * max) + min;
};

const add = (...args) => {
  let i = 0;
  let sum = 0;
  while (i < args.length) {
    sum = sum + args[i];
    i++;
  }
  return sum;
};

// *note:you can export one as default and some others as object

export { generateRandNum }; //!you need to export an object

export default add;
