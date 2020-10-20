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
    path: path.resolve('build'),
    filename: '[name].js',
    library: '[name]',
    libraryTarget: 'umd',
    publicPath: '/dist/',
    umdNamedDefine: true
  },
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
  }
  ,
  plugins: [
    new CaseSensitivePathsPlugin(),
    new WebpackBar({
      name: '🚚sy Design Tools',
      color: '#2f54eb',
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].css',
      chunkFilename: '[id].css',
      ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ],
  externals: {
    "react": {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react'
    },'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
    },
  }
};
