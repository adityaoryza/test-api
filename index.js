const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

const port = 3030;
const server = app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
