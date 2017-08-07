'use strict';

const path = require('path');
const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const UglifyEsPlugin = require('uglify-es-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'app.js'
  },
  devtool: 'source-map',
  plugins: [
    // new UglifyEsPlugin(),
    new WebpackNotifierPlugin({
      title: 'Learn to bike!',
      alwaysNotify: true
    })
  ]
}