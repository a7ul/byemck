const express = require('express');
const util = require('./src/util');
const bye = require('./src/ansi/animations/bye');

const PORT = process.env.PORT || 3000;

const app = express();

// bye bye example
app.get('/', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    const stream = util.getStream(req, res);
    await bye(stream);
    return null;
  }
  return next();
});

app.use('/', express.static('static/bye'));

app.use('*', (req, res) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    return res.send(`
    Hit: curl http://byemck.atulr.com/

    You are trying to hit an invalid route!
    \n`);
  }
  res.redirect('/');
});

app.listen(PORT, () => console.log(`bye bye app listening on port ${PORT}!`));
