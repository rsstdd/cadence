const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log('on some port');
});
