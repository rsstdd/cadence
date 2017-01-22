const path = require('path');
const webpack = require('webpack');
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'build');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    APP_DIR + '/index.jsx',
  ],
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: '/build/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['react-hot-loader', 'babel-loader'],
      include: path.join(__dirname, 'src'),
    }],
  },
  resolve: {
    extensions: ['', '.jsx', '.js']
  },
}
