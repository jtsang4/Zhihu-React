var express = require('express')
var app = express()

var router = require('./router') // 路由配置函数

router(app)

app.listen(3000, function () {
  console.log('A Express server has listening to port: 3000')
})
