const express = require('express');

const router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});


/* GET api listing. */
router.get('/', (req, res) => {
    // const bookingServiceCategoriesData = require('../database/models/userNamesModel');
    res.send('api works');
});

module.exports = router;