const port = 5000;
const express = require('express');
const knex = require('knex');
const knexConfig = require('./knexfile.js');
const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
  res.send('bruhhhhhhhh');
});

server.get('/users', (req, res) => {
  db('users')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

// server.get('/users', (req, res) => {
//   const users = [
//     {
//       id: 1,
//       name: 'faux'
//     },
//     {
//       id: 2,
//       name: 'graf'
//     }
//   ];

//   res.status(200).json(users);
// });

server.post('/users', (req, res) => {
  const user = req.body;

  db.insert(user)
    .into('users')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.listen(5000, () => {
  console.log(`SERVER BE RUNNIN ON ${port}`);
});
