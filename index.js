const express = require('express');
const { getOutput } = require('./src/response');

const app = express();

app.get('/', (req, res) => {
  const userAgent = req.headers['user-agent'];
  const output = getOutput(userAgent);
  res.send(output);
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));
