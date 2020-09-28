const path = require('path');

module.exports = {
  mode:'production',
  entry: 'index.ts',
  resolve: {
    extensions: ['.js','.ts','.tsx']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
