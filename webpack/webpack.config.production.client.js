// Server Side Rendering inspired by https://github.com/Alex-ray/v2-universal-js-hmr-ssr-react-redux
import path from 'path';
import webpack from 'webpack';

import AssetsPlugin from 'assets-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

const root = process.cwd();
const src = path.join(root, 'src');
const build = path.join(root, 'build');
const clientSrc = path.join(src, 'client');

const vendor = [
  'react',
  'react-dom',
  'react-router',
  'react-redux',
  'redux',
  'ramda',
];

export default {
  context: src,
  target: 'web',
  entry: {
    app: [
      'babel-polyfill/dist/polyfill.js',
      './client/main.js',
    ],
    vendor,
  },
  output: {
    filename: '[name]_[chunkhash].js',
    chunkFilename: '[name]_[chunkhash].js',
    path: build,
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
    unsafeCache: true,
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new ExtractTextPlugin('[name].css'),
    new webpack.NormalModuleReplacementPlugin(/\.\.\/routes\/routeStatic/, '../routes/routeAsync'),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity,
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    /* minChunkSize should be 50000 for production apps
      * 10 is for this example */
    new webpack.optimize.MinChunkSizePlugin({ minChunkSize: 10000 }),
    // tree shaking: eliminate dead codes
    new UglifyJSPlugin(),
    // compress bundled file to gzip
    new CompressionPlugin({ test: /\.js/ }),
    new AssetsPlugin({ path: build, filename: 'assets.json' }),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      '__CLIENT__': true,
      '__PRODUCTION__': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      // JavaScript
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: clientSrc,
      },
      // CSS
      {
        test: /\.css$/,
        include: clientSrc,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                root: src,
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]_[local]_[hash:base64:5]',
              },
            },
            { loader: 'postcss-loader' },
          ],
        }),
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
};
