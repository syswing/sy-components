const path = require('path');

module.exports = {
  mode:'development',
  entry: 'index.ts',
  resolve: {
    extensions: ['.js','.ts','.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
