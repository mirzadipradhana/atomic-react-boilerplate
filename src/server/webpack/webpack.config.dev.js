'use strict';

import { APP_SETUP, PATH } from '../../../.configs';
import Webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const BUILD_TARGET = 'dist';

module.exports = {
  entry: [
    'babel-polyfill', // Support promise for IE browser (for dev)
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true', // connects to the HMR server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly
    `${PATH.CLIENT_SRC}/main.js`,
  ],
  devtool: 'eval-source-map',
  output: {
    path: `${PATH.ROOT}/${BUILD_TARGET}/`,
    filename: 'bundle.js',
    publicPath: `/${BUILD_TARGET}/`,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${PATH.TEMPLATES}/index.tpl.html`,
      inject: 'body',
      filename: 'index.html',
    }),
    new Webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
    }),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.HotModuleReplacementPlugin(), // enabled HMR
    new Webpack.NoEmitOnErrorsPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(APP_SETUP.IS_DEV)
      },
    }),
    new BundleAnalyzerPlugin(),
    new ExtractTextPlugin('stylesheet/[name].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: PATH.CLIENT_SRC,
      },
      {
        test: /\.(png|jpg)$/,
        use: 'file-loader',
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]__[local].[hash:base64:4]',
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  target: 'web',
};
