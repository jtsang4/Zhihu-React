const path = require('path')
const webpack = require('webpack')
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const autoprefixer = require('autoprefixer')

const extractCSSWebpackPlugin = new ExtractTextWebpackPlugin('css/vendor.css') // 分离css
const extractLessWebpackPlugin = new ExtractTextWebpackPlugin('css/styles.css') // 分离less

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
      app: path.resolve(__dirname, '..'), // app 目录
      assets: path.resolve(__dirname, '../assets'), // 静态资源目录目录
      static: path.resolve(__dirname, '../static'), // 第三方静态资源目录目录
      containers: path.resolve(__dirname, '../containers'), // 子页面目录
      components: path.resolve(__dirname, '../components') // components 目录
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
        test: /\.(png|jpg|jpeg|gif|bmp|ico)$/i,
        exclude: /node_modules/,
        use: 'url-loader?limit=1000&name=assets/imgs/[name].[hash:8].[ext]&publicPath=/'
      },
      {
        test: /\.(woff|woff2|svg|ttf|eot)$/i,
        exclude: /node_modules/,
        use: 'url-loader?limit=1000&name=assets/fonts/[name].[hash:8].[ext]&publicPath=/'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: { loader: 'html-loader', options: {minimize: true, attrs: ['img:src', 'link:href']} }
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
      template: path.resolve(__dirname, '../containers/index.html')
    }),
    // 编译时的全局变量
    new webpack.DefinePlugin({
      __ENV__: JSON.stringify(process.env.NODE_ENV)
    }),
    // 把源文件静态资源复制到打包的指定目录下
    new CopyWebpackPlugin([
      { from: 'app/assets/dynamic/imgs', to: 'dynamic/imgs' }
    ])
  ]
}
