/**
 * node js 搭建的服务器
 */

const webpack = require('webpack');

const webpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.middleware.js');
const options = {
  contentBase: './dsit',
  hot: true,
  host: 'localhost'
};
webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, 'localhost', function () {
  console.log("nodejs webpack 环境 server listening on port 5000")
} );