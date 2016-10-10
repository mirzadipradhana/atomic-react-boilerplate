'use strict';

var PATH = require('../../../.configs').PATH;
var Webpack = require('webpack');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ProgressBarPlugin = require('progress-bar-webpack-plugin');
var StatsPlugin = require('stats-webpack-plugin');

var buildPublicPath = '/';
var commonLoaders = [
	{ test: /\.(js|jsx)$/, loader: 'babel-loader', include: PATH.CLIENT_SRC },
	{ test: /\.png$/, loader: 'file-loader' },
	{ test: /\.jpg$/, loader: 'file-loader' },
	{ test: /\.json$/, loader: 'json-loader' },
  { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader'), include: PATH.ASSETS },
	{ test: /\.css$/, loader: 'style-loader!css-loader?modules&localIdentName=[local]__[hash:base64:4]!postcss-loader', exclude: PATH.ASSETS },
  {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file?name=fonts/[name].[ext]'
  }
];
var extractCSSModules = new ExtractTextPlugin('stylesheet/app.css');

module.exports = {
  entry: [
    `${PATH.CLIENT_SRC}/main.js`
  ],
  output: {
    path: PATH.WEBPACK_OUTPUT,
    filename: process.env.NODE_ENV === 'production' ? '[name]-[chunkhash].js' : 'bundle.js',
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
    new Webpack.NoErrorsPlugin(),
    extractCSSModules,
    new Webpack.optimize.DedupePlugin(),
    new Webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
    new Webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
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
