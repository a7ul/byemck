const style = require('ansi-styles');

const getAnsiResponse = () => `Hi ${style.green.open}Hello World!${style.green.close}\n`;

const getStaticResponse = () => 'Hi Hello World';

const getOutput = (userAgent) => {
  if (userAgent.search(/curl|wget/i) !== -1) {
    return getAnsiResponse();
  }
  return getStaticResponse();
};

module.exports = {
  getOutput,
};
