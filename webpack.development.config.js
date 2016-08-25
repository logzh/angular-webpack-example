var webpack = require('webpack');
var path = require('path');
var entry = require('./entry.js');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'static/js/vendor.[hash:8].js');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var templateConfig = require('./html.template.config.js').dev;

var config = {
  entry: entry,
  output: {
    path: __dirname + '/development',
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
        test: /\.js[x]?$/,
        include: path.resolve(__dirname, 'public'),
        exclude: /node_modules/,
        loader: 'babel-loader'
      }, {
        test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
        loader: 'url?limit=1024&name=static/images/[hash].[ext]' // 小于8kb的图片转化为base64，css中其他的图片地址会被体会为打包的地址，此处用到了publicPath
      }, 
      {
        test: /\.css$/, 
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap')
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loader: 'html'
      }
        
    ]
  },
  plugins: [
    commonsPlugin,
    new ExtractTextPlugin('static/css/[name].[chunkhash:8].css')
  ]
};

for (var i = 0; i < templateConfig.length; i++) {
  config.plugins.push(new HtmlWebpackPlugin(templateConfig[i]));
}

module.exports = config;
