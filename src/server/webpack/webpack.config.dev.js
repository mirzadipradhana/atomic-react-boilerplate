'use strict';

import Webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import { APP_SETUP, PATH } from '../../../.configs';

const BUILD_TARGET = 'dist';

module.exports = {
  entry: {
    app: [
      'babel-polyfill', // Support promise for IE browser (for dev)
      'react-hot-loader/patch',
      'webpack-hot-middleware/client?reload=true', // connects to the HMR server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly
      `${PATH.CLIENT_SRC}/main.js`,
    ],
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'material-ui',
    ],
  },
  devtool: 'eval-source-map',
  output: {
    path: `${PATH.ROOT}/${BUILD_TARGET}/`,
    filename: '[name].[hash].js',
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

    // compress bundled file to gzip
    new CompressionPlugin({
      test: /\.js/,
      algorithm: 'gzip',
      threshold: 10240,
      minRatio: 0.8,
    }),

    // create separate common modules file chunk
    new Webpack.optimize.CommonsChunkPlugin({ name: 'common', filename: 'common.js' }),

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
        test: /\.(js|js)$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
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
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  target: 'web',
};
