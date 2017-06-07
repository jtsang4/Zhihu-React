var express = require('express')
var router = express.Router()

// GET /api/foo下的所有接口定义
router.get('/', function (req, res, next) {
  res.send({a: 1, b: 2})
})

module.exports = router
