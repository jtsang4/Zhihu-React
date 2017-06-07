const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const autoprefixer = require('autoprefixer')

const extractCSSWebpackPlugin = new ExtractTextWebpackPlugin('css/styles1.css') // 分离css
const extractLessWebpackPlugin = new ExtractTextWebpackPlugin('css/styles2.css') // 分离less

module.exports = {
  // 打包入口
  entry: {
    index: path.resolve(__dirname, '../index.jsx')
  },

  // 打包输出目录
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].bundle.js'
  },

  // 模块解析配置
  resolve: {
    alias: {
      app: path.resolve(__dirname, '..'), // 前端 app 目录
      pages: path.resolve(__dirname, '../pages'), // 子页面目录
      components: path.resolve(__dirname, '../components') // 前端 components 目录
    },
    extensions: ['.js', '.jsx', '.json']
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: extractCSSWebpackPlugin.extract({
          fallback: 'style-loader?singleton',
          use: [
            'css-loader',
            { loader: 'postcss-loader', options: {plugins: (loader) => [autoprefixer()]} }
          ]
        })
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: extractLessWebpackPlugin.extract({
          fallback: 'style-loader?singleton',
          use: [
            'css-loader',
            { loader: 'postcss-loader', options: {plugins: (loader) => [autoprefixer()]} },
            'less-loader'
          ]
        })
      },
      {
        test: /\.(png|jpg|jpeg|gif|bmp)$/i,
        exclude: /node_modules/,
        use: 'url-loader?limit=5000&name=imgs/[name].[hash:8].[ext]'
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)$/i,
        exclude: /node_modules/,
        use: 'url-loader?limit=5000&name=fonts/[name].[hash:8].[ext]'
      }
    ]
  },

  // plugins
  plugins: [
    new webpack.BannerPlugin('Copyright by zvit1@github.com'), // 打包后在代码里加上 banner
    extractCSSWebpackPlugin,
    extractLessWebpackPlugin,
    // HTML模板
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../pages/index.html')
    }),
    // 编译时的全局变量
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV)
    })
  ]
}
