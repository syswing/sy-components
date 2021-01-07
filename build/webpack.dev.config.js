const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './example/index.tsx',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
    alias: {
      '@': path.resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '.web'),
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
    new BundleAnalyzerPlugin({
      analyzerPort: '7777',
    }),
    new HtmlWebpackPlugin({
      title: 'custom template',
      template: 'index.html'
    })
  ],
  devServer: {
    // historyApiFallback: true,
    // // disableHostCheck: true,
    // hot: true,
    // // open: true,
    // // contentBase: './dist',
    // port:3002,
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
};
