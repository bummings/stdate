const port = 5000;
const express = require('express');
const graphqlHTTP = require('express-graphql');

const server = express();
server.use(express.json());

// keep yr REST API routes up in the meantime, tho
server.use('/graphql', graphqlHTTP({}));

const userRouter = require('./users/userRouter');

// R O O T
server.get('/', (req, res) => {
  res.send('API root landing.');
});

// R O U T E S
server.use('/users', userRouter);

server.listen(5000, () => {
  console.log(`SERVER BE RUNNIN ON ${port}`);
});
