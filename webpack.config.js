var webpack = require('webpack');
var path = require('path');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/common.js');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'app/js/app.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: './js/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']// 配置可以不书写的后缀名
    },
    module: {
        loaders: [
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader: "raw"
            }
        ]
    },
    plugins: [
        //commonsPlugin,
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};