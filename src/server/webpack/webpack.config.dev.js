'use strict';

import { APP_SETUP, PATH } from '../../../.configs';
import Webpack from 'webpack';

import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';

const commonLoaders = [
	{ test: /\.(js|jsx)$/, loader: 'babel-loader', include: PATH.CLIENT_SRC },
	{ test: /\.png$/, loader: 'url-loader' },
	{ test: /\.jpg$/, loader: 'file-loader' },
	{ test: /\.json$/, loader: 'json-loader' },
	{ test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'), include: PATH.ASSETS },
	{ test: /\.css$/, loader: 'style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:4]!postcss-loader', exclude: PATH.ASSETS }
];

const extractCSSAsset = new ExtractTextPlugin('stylesheet/globals.css');
const buildPublicPath = '/server';

module.exports = {
  entry: [
    'webpack-hot-middleware/client', // connects to the HMR server to receive notifications when the bundle rebuilds and then updates your client bundle accordingly
    `${PATH.CLIENT_SRC}/main.js`
  ],
  devtool: 'eval-source-map',
  output: {
    path: PATH.WEBPACK_OUTPUT,
    filename: 'bundle.js',
    publicPath: buildPublicPath
  },
  plugins: [
    new ProgressBarPlugin(),
    new HtmlWebpackPlugin({
      template: `${PATH.TEMPLATES}/index.tpl.html`,
      inject: 'body',
      filename: 'index.html'
    }),
    new Webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom'
    }),
    new Webpack.optimize.OccurenceOrderPlugin(),
    new Webpack.HotModuleReplacementPlugin(), // enabled HMR
    new Webpack.NoErrorsPlugin(),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(APP_SETUP.IS_DEV)
      }
    }),
    extractCSSAsset
  ],
  module: {
    loaders: commonLoaders
  },
  postcss: function plugins(bundler) {
    return [
      require('postcss-import')({ addDependencyTo: bundler }),
      require('postcss-cssnext')({ autoprefixer: { browsers: ['last 2 versions'] }, customProperties: false }),
      require('postcss-mixins')({ mixinsFiles: PATH.ASSETS + '/css/mixins.css'} ),
      require('postcss-nested')(),
      require('postcss-simple-vars')()
    ];
  },
  resolve: {
    extension: ['', '.js', '.jsx']
  },
  target: 'web'
};
