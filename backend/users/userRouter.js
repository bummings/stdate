const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

// G E T  A L L  U S E R S
router.get('/', (req, res) => {
  db('users')
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

// G E T  U S E R  B Y   I D
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('users')
    .where({ id: id })
    .first()
    .then(user => res.status(200).json(user))
    .catch(err => res.status(500).json(err));
});

//  C R E A T E  U S E R
router.post('/', (req, res) => {
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

// U P D A T E   U S E R
router.put('/:id', (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('users')
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

// D E L E T E   U S E R
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('users')
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
