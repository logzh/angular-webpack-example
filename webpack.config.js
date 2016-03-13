var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var templateConfig = require('./html.template.config.js').dev;

var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[hash:8].js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

for (var prop in entry) {
  if (entry.hasOwnProperty(prop)) {
    entry[prop].unshift('webpack-dev-server/client?http://localhost:8080');
    entry[prop].unshift('webpack/hot/dev-server');
  }
}

var config = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './public',
    stats: 'error-only',
    port: 8080,
    proxy: { // 请求后端数据
      '/server/*': 'http://localhost:8081'
    }
  },
  entry: entry,
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'static/js/[name].[chunkhash:8].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], // 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/') // 配置绝对路径，alias、entry中会使用
  },
  module: {
    loaders: [
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url?limit=8192'// 小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
      },
      {test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')},
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'raw'
      }
    ]
  },
  devtool: '#source-map',
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].[chunkhash:8].css'),
    new webpack.HotModuleReplacementPlugin(),
    new OpenBrowserPlugin({url: 'http://localhost:8080'})
  ]
};

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;
