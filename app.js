const express = require('express');
const app = express();

app.use('/', (req, res) => {
  res.json({
    message: 'hello world',
  });
});

const port = 3030;
const server = app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
