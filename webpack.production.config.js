var webpack = require('webpack');
var merge = require('webpack-merge');
var path = require('path');
var base = require('./webpack.base.config');
var templateConfig = require('./html.webpack.config.js').pro;
var HtmlWebpackPlugin = require('html-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[hash].js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = merge(base, {
  output: {
    filename: 'static/js/[name].[chunkhash].js',
    publicPath: 'http://cdn.com/' // 静态资源地址
  },
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
});

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;
