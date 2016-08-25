var express = require('express');
var app = express();

var userRouter = require('./router/user');

app.get('/', function (req, res) {
  res.send('Hello World!后台 API 服务');
});

app.use('/server/user', userRouter);

var server = app.listen(3000, function () {
  console.log('后台api服务启动 listening at http://localhost:3000');
});
