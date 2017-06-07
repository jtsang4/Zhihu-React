module.exports = function (app) {
  app.use('/api/foo', require('./foo')) // 在/api/foo路径下的路由全部交给./foo.js里的配置处理
}
