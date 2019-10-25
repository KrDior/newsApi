const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { DuplicatesPlugin } = require('inspectpack/plugin');
const CircularDependencyPlugin = require('circular-dependency-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  mode: 'development',
  entry: path.resolve( __dirname, './src/app/index.js'),
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve( __dirname, './src/public/index.html'),
      filename: 'index.html',
      inject: 'body'
    }),
    new DuplicatesPlugin(),
    new CircularDependencyPlugin(),
    new webpack.DefinePlugin({
      API_KEY: JSON.stringify(process.env.API_KEY)
    })
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', options: {
              sourceMap: true, modules: true
            }
          },
          {
            loader: 'postcss-loader', // Run postcss actions
            options: {
              plugins: function () { // postcss plugins, can be exported to postcss.config.js
                return [
                  require('autoprefixer')
                ];
              }
            }
          },
          {
            loader: 'sass-loader', options: { sourceMap: true }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.es6']
  }
}
