const express = require('express');
const port = process.env.PORT || 8000;
const path = require('path');

const app = express();

app.use('/dist', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  console.log('on some port');
});
