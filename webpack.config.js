const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: [{ loader: "postcss-loader" }, {
        loader: "style-loader"
      }, {
        loader: "css-loader"
      }, {
        loader: "less-loader"
      }]
    }]
  },
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
    disableHostCheck: true,
    hot: true,
    open: true,
  },
};
