const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  resolve: {
    extensions: ['.js', '.ts', '.tsx','.css'],
    alias: {
      '@': path.resolve('src')// 这样配置后 @ 可以指向 src 目录
    }
  },
  output: {
    path: path.resolve('build'), // 要输出多文件这里就要配置输出目录而不是当个文件
    filename: '[name]/index.js',
    // output.library 和 output.libraryTarget 一起使用 对外暴露 library 及定义输出组件库格式
    library: ['xxx-components', '[name]'], 
    libraryTarget: 'umd',
    publicPath: '/'
  },
  // optimization: {
  //   minimize: true,
  //   minimizer: [new TerserPlugin()],
  // },
  module: {
    rules: [{
      test: /\.less$/,
      use: [{
        loader: "style-loader"
      },{
        loader:  MiniCssExtractPlugin.loader,
        options: {
          esModule: false,
          modules: {
            namedExport: true,
          },
        },
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
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
};
