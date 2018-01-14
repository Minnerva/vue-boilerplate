const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./webpack.common')
const { distDir, pathResolve } = require('./webpack.util.js')

module.exports = merge(common, {
  devtool: 'inline-source-map',
  devServer: {
    port: 8080,
    hot: true,
    contentBase: distDir,
    publicPath: '/',
    historyApiFallback: true
  },
  output: {
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
      env: {
        dev: true,
        base: ''
      }
    })
  ]
})
