const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const WebpackBar = require('webpackbar');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WebpackBar({
      name: '🚚 building...',
      color: '#2f54eb',
    }),
  ],
  externals: {
    "react": {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    }, 'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  }
};
