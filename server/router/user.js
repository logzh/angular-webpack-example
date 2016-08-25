var express = require('express');
var router = express.Router();

router.get('/:id([0-9]+)', function(req, res, next) {
  res.json(require('../json/user.info.json'));
});

// post put delete

module.exports = router;
