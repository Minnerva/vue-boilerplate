const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin') // remove dist folder
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // use for css-loader

const { distDir, pathResolve } = require('./webpack.util.js')

module.exports = {
  resolve: {
    modules: ['node_modules'], // folder for webpack to search on.
    // descriptionFiles: ['package.json'],
    extensions: ['.js', '.vue'], // for calling file without extension
    alias: { // set shortcut for calling a file and give consistent when calling instead of ../../../
      '~': pathResolve('src'),
      '~assets': pathResolve('src/assets'),
      '~components': pathResolve('src/components'),
      '~i18n': pathResolve('src/i18n'),
      '~layouts': pathResolve('src/layouts'),
      '~stores': pathResolve('src/stores'),
      '~views': pathResolve('src/views'),

      'vue': 'vue/dist/vue.js'
    }    
  },
  entry: { // create a file base on the name of the key object
    app: pathResolve('src'),
    vendor: ['vue', 'vue-router']
  },
  output: {
    path: distDir // output directory
  },
  plugins: [
    // create global constant, this is important as vue will keep warning you if not set ENV as 'production'
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV || '"production"'
      }
    }),
    // This will make vendor hold all the dependencies and will not duplicate it on other files
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    // This plugin helps delete dist directory each time it excutes
    new CleanWebpackPlugin([''], { root: distDir }),
    new CopyWebpackPlugin([
      {
        from: './src/public',
        to: ''
      }
    ])
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      },
      {
        test: /.pug$/,
        use: ['pug-loader']
      },
      {
        test: /.styl$/,
        use: ['css-loader', 'stylus-loader']
      }
    ]
  }
}
