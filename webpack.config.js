var webpack = require('webpack');
var path = require('path');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('js/common.js');

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: './app',
        port: 8080
    },
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/js/app.js')
    ],
    output: {
        path: __dirname + '/build',
        publicPath: '/',
        filename: './js/bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],// 配置可以不书写的后缀名
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
    devtool: "#source-map",
    plugins: [
        commonsPlugin,
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserPlugin({url: 'http://localhost:8080'})
    ]
};