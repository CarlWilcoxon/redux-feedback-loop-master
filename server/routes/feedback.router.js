const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//Setup a POST route to accept feedback from clients
router.post('/', (req, res) => {
  console.log(req.body);

  const newFeedback = req.body;
  const sqlText = `INSERT INTO feedback (feeling, understanding, support, comments)
  VALUES ($1, $2, $3, $4)`;
  // the $1, $2, etc get substituted with the values from the array below
  pool.query(sqlText, [newFeedback.feels, newFeedback.understand, newFeedback.support, newFeedback.comments])
    .then((result) => {
      console.log(`Added feedback to the database`);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Error making database query ${sqlText}`, error);
      res.sendStatus(500); // Good server always responds
    })
})

module.exports = router;