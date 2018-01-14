const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const common = require('./webpack.common')
const { distDir, pathResolve } = require('./webpack.util.js')

module.exports = merge(common, {
  output: {
    filename: '[name].[chunkhash].js', // attact hash with the file name, if file has no change, hash stays the same.
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    }),
    new ExtractTextPlugin('style.[contenthash].css'),
    // minifycss
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true } },
      canPrint: true
    }),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
      env: {
        prod: true,
        base: 'http://localhost:8080/',
        key: {
          analytics: ''
        }
      }
    })
  ]
})
