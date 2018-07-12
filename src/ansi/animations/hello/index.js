const style = require('ansi-styles');
const symbols = require('../../symbols');

const hello = () => `
${symbols.PAGE_BREAK} 
Hi 
${style.green.open}Hello Green!${style.green.close}
${style.red.open}Hello Red!${style.red.close}
\n`;


const animateHello = (stream) => {
  stream.push(hello());
  stream.push(hello());
  stream.push(null);
};

module.exports = {
  hello,
  animateHello,
};
