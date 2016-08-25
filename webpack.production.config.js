var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var templateConfig = require('./html.template.config.js').pro;
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[chunkhash].js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
  entry: entry,
  output: {
    path: __dirname + '/product',
    publicPath: 'http://cdn.abc.com/',
    filename: 'static/js/[name].[chunkhash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], // 配置可以不书写的后缀名
    root: path.join(__dirname, 'public/') // 配置绝对路径，alias、entry中会使用
  },
  module: {
    loaders: [{
      test: /\.js[x]?$/,
      include: path.resolve(__dirname, 'public'),
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
      loader: 'url?limit=1024&name=static/images/[chunkhash].[ext]'
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
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].[chunkhash].css'),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    commonsPlugin
  ]
};

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;
