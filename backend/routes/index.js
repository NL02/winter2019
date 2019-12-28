var express = require('express');
var router = express.Router();
var functions = require('../functions/functions.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'George' });
});

router.get('/home', function(req, res, next) {
  var str = functions.printHello()
  console.log(str)
  res.render('home', { title: 'Express', name: str });
});

module.exports = router;
