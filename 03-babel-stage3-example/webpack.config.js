var path = require('path');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index.js']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: ['babel-loader']
    }]
  }
}
