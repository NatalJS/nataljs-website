const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/scss/app.scss', './src/js/app.js'],
  output: {
    filename: 'app.[hash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve: {
    alias: {
      'scss': path.resolve(__dirname, 'src/scss'),
      'assets': path.resolve(__dirname, 'src/img'),
      'app': path.resolve(__dirname, 'src/js')
    }
  },
  devtool: 'source-map',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test:  /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name() {
            return './assets/[name].[hash].[ext]';
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {loader: 'style-loader', options: { sourceMap: true }},
          {loader: 'css-loader', options: { sourceMap: true }},
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
  ]
}
