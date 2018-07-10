const style = require('ansi-styles');

const hello = () => {
  const result = `
  Hi 
  ${style.green.open}Hello Green!${style.green.close}
  ${style.red.open}Hello Red!${style.red.close}
  \n`;
  return result;
};

module.exports = {
  hello,
};
