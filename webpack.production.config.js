const merge =  require('webpack-merge');
const UglifyJSPlugin =  require('uglifyjs-webpack-plugin');
const config =  require('./webpack.config');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = merge(config, {
  mode: 'production',
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        sourceMap: true
      })
    ],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: 'css-loader',
            options: { sourceMap: true, minimize: true }
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'node_modules')],
              sourceMap: true
            }
          }
        ],
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'styles.[hash].css' }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      },
    }),
  ],
});
