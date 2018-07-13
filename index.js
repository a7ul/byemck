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
app.use('/bye', express.static('static/bye'));

// 404 - not found
app.use('*', (req, res, next) => {
  const userAgent = req.headers['user-agent'];
  if (util.isCommandline(userAgent)) {
    return res.send(`
    Hint: curl https://console-web-ui.herokuapp.com/bye

    Possible routes: 
    /bye - Gives bye bye animation 
    /hello - Gives a nice and simple hello
    /anime-hello - Gives a nice animated hello
   
  `);
  }
  return next();
});

app.use('*', express.static('static/404'));

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
