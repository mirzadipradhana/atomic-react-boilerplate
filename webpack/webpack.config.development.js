'use strict';

import webpack from 'webpack';
import path from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const root = process.cwd();
const src = path.join(root, 'src');
const clientSrc = path.join(src, 'client');

module.exports = {
  context: src,
  entry: {
    app: [
      'babel-polyfill/dist/polyfill.js', // Support promise for IE browser (for dev)
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?noInfo=false',
      './client/main.js',
    ],
  },
  devtool: 'eval-source-map',
  output: {
    filename: 'app.js',
    chunkFilename: '[name]_[chunkhash].js',
    path: path.join(root, 'build'),
    publicPath: '/static/',
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(), // enabled HMR
    // new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': false,
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new BundleAnalyzerPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: clientSrc,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.css$/,
        include: clientSrc,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              root: src,
              modules: true,
              importLoaders: 1,
              localIdentName: '[name]__[local].[hash:base64:4]',
            },
          },
          { loader: 'postcss-loader' },
        ],
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
        use: 'file-loader?name=images/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
  },
  target: 'web',
};
