var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var user = require('../json/user.json');
  res.json({err_code:0, msg:'', user:user});
});

module.exports = router;
