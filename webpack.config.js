const HtmlPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'zoas_bundle.[hash].js'
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
      }
    ]
  },
  plugins: [
    new HtmlPlugin({
      template: './src/index.html'
    })
  ]
}
