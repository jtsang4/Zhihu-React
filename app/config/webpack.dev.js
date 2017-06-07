const path = require('path')
const webpack = require('webpack')

const commonConfig = require('./webpack.base.js') // 基本配置

const devConfig = {
  devServer: {
    historyApiFallback: true, // 当404时，返回到 index.html
    hot: true, // 模块热更新
    stats: "errors-only", // 只在报错时输出信息
    contentBase: path.resolve(__dirname, '../build'), // dev-server的根目录
    compress: true, // 开启gzip压缩
    inline: true,
    port: 8080, // 监听8080端口
    overlay: { // 当有编译错误或者警告的时候显示一个全屏overlay
      errors: true,
      warnings: true
    },
    proxy: {
      // 凡是 api 开头的请求，就代理到本地的3000端口
      '/api': {
        target: 'http://127.0.0.1:3000',
        secure: false
      }
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

const config = Object.assign(
  {},
  commonConfig,
  devConfig,
  { plugins: [...commonConfig.plugins, ...devConfig.plugins] }
)

module.exports = config
