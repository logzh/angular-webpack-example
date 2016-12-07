var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: entry,
  output: {
    //filename: 'static/js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js'], // 配置可以不书写的后缀名
    root: path.resolve(__dirname, 'public/') // 配置绝对路径，alias、entry中会使用
  },
  externals: {
    'MtaH5': true,
    'wx': true
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url?limit=1024&name=static/images/[hash].[ext]'
      }, {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      }, {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      }
    ]
  },
  // vue: { // 使用单文件组件时，<style> 标签在开发运行过程中会被动态实时注入。在生产环境中，你可能需要从所有组件中提取样式到单独的 CSS 文件中。 http://vuejs.org/guide/deployment.html#Extracting-CSS
  //   loaders: {
  //     css: ExtractTextPlugin.extract("css"),
  //     // you can also include <style lang="less"> or other langauges
  //     // less: ExtractTextPlugin.extract("css!less")
  //   }
  // },
  plugins: []
};

module.exports = config;
