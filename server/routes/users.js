/*
    File name: users.js
    Student name: Yang Xuan
    StudentID: 301186289
    Date: Oct 23, 2022
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
