
const isCommandline = (userAgent) => {
  const check = (userAgent.search(/curl|wget/i) !== -1);
  return check;
};

module.exports = {
  isCommandline,
};
