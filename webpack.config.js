var webpack = require('webpack');
var path = require('path');

module.exports = {
    devtool: 'cheap-module-eval-source-map',
    entry: [
        path.resolve(__dirname, 'app/js/app.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'js/bundle.js'
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
        new webpack.optimize.CommonsChunkPlugin('js/common.js')
    ]
};