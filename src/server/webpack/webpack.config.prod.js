'use strict';

var PATH = require('../../../.configs').PATH;
var Webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const BUILD_TARGET = 'dist';

module.exports = {
  entry: {
    app: [
      'babel-polyfill', // Support promise for IE browser (for dev)
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
  output: {
    path: `${PATH.ROOT}/${BUILD_TARGET}/`,
    filename: '[name].[hash].js',
    publicPath: `/${BUILD_TARGET}/`,
  },
  plugins: [
    // remove/clean your build folder(s) before building
    new CleanWebpackPlugin(['dist'], {
      root: PATH.ROOT,
      verbose: true,
      dry: false,
    }),

    new HtmlWebpackPlugin({
      template: `${PATH.TEMPLATES}/index.tpl.html`,
      inject: 'body',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new Webpack.ProvidePlugin({
      'React': 'react',
      'ReactDOM': 'react-dom',
    }),
    new Webpack.optimize.OccurrenceOrderPlugin(),
    new Webpack.NamedModulesPlugin(),
    new Webpack.NoEmitOnErrorsPlugin(),

    // create separate common modules file chunk
    new Webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' }),

    // tree shaking: eliminate dead codes
    new UglifyJSPlugin(),

    // compress bundled file to gzip
    new CompressionPlugin({ test: /\.js/ }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new ExtractTextPlugin('stylesheet/[name].[contenthash].css'),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        include: PATH.CLIENT_SRC,
        exclude: `${PATH.ROOT}/node_modules/`,
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
