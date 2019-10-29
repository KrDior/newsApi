/* eslint-disable global-require */
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
    entry: [
        path.resolve(__dirname, './src/app/index.js'),
    ],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, './src/public'),
        publicPath: 'http://localhost:9000/',
        compress: true,
        port: 9000,
    },
    plugins: [
        new CleanWebpackPlugin(),
        new DuplicatesPlugin(),
        new webpack.DefinePlugin({
            API_KEY: JSON.stringify(process.env.API_KEY),
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/public/index.html'),
            filename: 'index.html',
            inject: false,
        }),
    ],
    optimization: {
        minimizer: [new UglifyJsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                include: path.resolve(__dirname, './src/style'),
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins() {
                            return [
                                require('precss'),
                                require('autoprefixer'),
                            ];
                        },
                    },
                }, {
                    loader: 'sass-loader',
                }],
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.es6'],
    },
};
