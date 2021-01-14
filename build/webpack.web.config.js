const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './example/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../.web'),
    publicPath:'/'
  },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader",
        options:{
          modules: true
        }
      }, {
        loader: "less-loader"
      }]
    }, {
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    },{
      test: /\.css$/,
      use: [{
        loader: "style-loader"
      }, {
        loader: "css-loader"
      },{
        loader: "postcss-loader"
      }]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '展示页',
      template: 'index.html'
    })
  ]
};
