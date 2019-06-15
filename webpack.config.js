const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (_, argv) => {
  const isProduction = argv.mode === 'production'
  return {
    entry: {
      zoasapp: './src/index.js'
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: isProduction ? '[name].[contenthash].js' : '[name].js'
    },
    devServer: {
      contentBase: './dist',
      hot: true,
      port: 8081
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: '/node_modules/',
          use: {
            loader: 'babel-loader'
          }
        },
        {
          test: /(\.svg|\.png|\.jpg)$/,
          use: {
            loader: 'file-loader'
          }
        }
      ]
    },
    optimization: {
      minimize: isProduction,
      runtimeChunk: 'single',
      splitChunks: {
        name: false,
        cacheGroups: {
          common: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all'
          }
        }
      }
    },
    plugins: [
      new HtmlPlugin({
        template: './src/index.html',
        inject: true,
        hash: true,
        cache: true
      }),
      new webpack.HashedModuleIdsPlugin(),
      new webpack.EnvironmentPlugin({
        API_URL: process.env.API_URL || 'http://localhost:3000'
      })
    ]
  }
}
