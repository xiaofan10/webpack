/**
 * 该配置文件可以单独使用 server.js 是配合中间件配置文件使用的
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production', // development
  entry: './src/index.js', // 单页面应用
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css/,
        use: [ // 从下往上编译
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
           'file-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Output Management'
    })
  ]
}
