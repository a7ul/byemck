const style = require('ansi-styles');
const symbols = require('./symbols');

const hello = test => `
${symbols.PAGE_BREAK} 
Hi ${test || ''}
${style.green.open}Hello Green!${style.green.close}
${style.red.open}Hello Red!${style.red.close}
\n`;

const animateHello = (stream) => {
  // setInterval(() => {
  //   stream.push(hello(Date.now()));
  // }, 100);
  stream.push(hello());
  stream.push(null);
};

module.exports = {
  hello,
  animateHello,
};
