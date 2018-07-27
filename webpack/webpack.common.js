const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const { distDir, envDir, pathResolve } = require('./webpack.util.js')

module.exports = {
  resolve: {
    modules: ['node_modules'],
    descriptionFiles: ['package.json'],
    extensions: ['.js', '.vue'],
    alias: {
      '@env': envDir,
      '@src': pathResolve('src'),
      '@assets': pathResolve('src/assets'),
      '@images': pathResolve('src/assets/images'),
      '@videos': pathResolve('src/assets/videos'),
      '@components': pathResolve('src/components'),
      '@layouts': pathResolve('src/layouts'),
      '@stores': pathResolve('src/stores'),
      '@views': pathResolve('src/views'),
      '@styles': pathResolve('src/assets/styles'),
      'vue': 'vue/dist/vue.esm.js'
    }
  },
  entry: {
    'assets/app': pathResolve('src/index')
  },
  output: {
    path: distDir,
    publicPath: '/'
  },
  plugins: [
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, './../')
    }),
    new CopyWebpackPlugin ([
      {
        from: path.resolve(__dirname, './../src/public'),
        to: ''
      }
    ]),
    new VueLoaderPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: ['eslint-loader']
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env'],
            plugins: [
              'transform-runtime'
            ]
          }
        }
      },
      {
        test: /\.(css|styl|stylus)$/,
        use: [
          'css-hot-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              minimize: process.env.npm_lifecycle_event === 'dist'
            }
          },
          'stylus-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|woff|woff2|eot|ttf|otf|mp4|ogg|ogv|webm)$/,
        use: ['file-loader?name=./assets/[hash].[ext]']
      },
      {
        test: /\.pug$/,
        use: ['pug-plain-loader']
      },
      {
        test: /\.vue$/,
        use: ['vue-loader']
      }
    ]
  }
}
