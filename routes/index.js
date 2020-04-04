var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Full Chat' });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'Full Chat' });
});


module.exports = router;
