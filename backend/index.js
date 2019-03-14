const express = require('express');
const server = express();
const port = 5000;

server.get('/', (req, res) => {
  res.send('bruhhhhhhhh');
});

server.listen(5000, () => {
  console.log(`SERVER IS RUNNIN ON ${port}`);
});
