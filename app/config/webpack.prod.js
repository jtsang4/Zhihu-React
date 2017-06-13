const webpack = require('webpack')
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin')

const commonConfig = require('./webpack.base.js')

const prodConfig = {
  plugins: [
    new UglifyJsWebpackPlugin({    // 最紧凑的输出
      beautify: false,
      // 删除所有的注释
      comments: false,
      compress: {
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    })
  ]
}

const config = Object.assign(
  {},
  commonConfig,
  { plugins: [...commonConfig.plugins, ...prodConfig.plugins] }
)

module.exports = config
