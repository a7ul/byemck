const express = require('express');
const util = require('./src/util');
const hello = require('./src/ansi/animations/hello');
const bye = require('./src/ansi/animations/bye');

const PORT = process.env.PORT || 3000;

const app = express();

// simple hello route
app.get('/hello', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    await res.send(hello.hello());
    return null;
  }
  return next();
});
app.use('/hello', express.static('static/hello'));

// animated example
app.get('/anime-hello', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    const stream = util.getStream(req, res);
    await hello.animateHello(stream);
    return null;
  }
  return next();
});
app.use('/anime-hello', express.static('static/hello'));

// bye bye example
app.get('/bye', async (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    const stream = util.getStream(req, res);
    await bye(stream);
    return null;
  }
  return next();
});
app.use('/bye', express.static('static/hello')); // TODO change this

// 404 - not found
app.use('*', (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    return res.send(`
    This is not a valid route: \n
    Please hit :
    /bye - Gives bye bye animation 
    /hello - Gives a nice hello
    /anime-hello - Gives a nice animated hello

    Hint: curl https://console-web-ui.herokuapp.com/bye
  `);
  }
  return next();
});

app.use('*', express.static('static/404'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
