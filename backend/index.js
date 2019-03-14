const express = require('express');
const server = express();
const port = 5000;

server.get('/', (req, res) => {
  res.send('bruhhhhhhhh');
});

server.get('/users', (req, res) => {
  const users = [
    {
      id: 1,
      name: 'faux'
    },
    {
      id: 2,
      name: 'graf'
    }
  ];

  res.status(200).json(users);
});

server.listen(5000, () => {
  console.log(`SERVER IS RUNNIN ON ${port}`);
});
