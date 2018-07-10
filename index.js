const express = require('express');
const util = require('./src/util');
const ansi = require('./src/ansi');

const app = express();

app.get('/hello', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    return res.send(ansi.hello());
  }
  return next();
});

app.use('/hello', express.static('static/hello'));

app.listen(3000, () => console.log('Example app listening on port 3000!'));
