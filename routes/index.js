var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { hello: 'Angularjs webpack example' });
});

module.exports = router;
