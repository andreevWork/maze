var path = require('path');
var config = require('../config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        path: config.paths.public
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style", "css!postcss")
            },
            {
                test: /\.pug$/,
                loader: 'pug'
            }
        ]
    },
    postcss: () => [
        require('postcss-normalize'),
        require('precss')({}),
        require('postcss-size'),
        require("postcss-sass-color-functions")(),
        require('autoprefixer')({browsers: ['last 2 versions'], remove: false})
    ],
    plugins: [
        new ExtractTextPlugin("app.css"),
        new HtmlWebpackPlugin({
            hash: true,
            minify: false,
            template: './app.pug'
        })
    ],
    watch: true
};