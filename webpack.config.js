/**
 * Created by spencezhang on 2015/10/15.
 */
var webpack = require('webpack');
var path = require('path');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');

module.exports = {
    entry: {
        app: './public/js/app.js'
    },
    output: {
        path: path.join(process.cwd(), 'public/build/'),
        filename: '[name].bundle.js',
        publicPath:'build/'
    },
    resolve: {
        extensions: ['', '.js'],
        root:path.join(process.cwd(), 'public/js/')
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
    devtool: 'source-map',
    plugins: [
        commonsPlugin
    ]

};
