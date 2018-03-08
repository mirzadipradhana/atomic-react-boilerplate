import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

// Paths
const root = process.cwd();
const src = path.join(root, 'src');
const build = path.join(root, 'build');
const clientSrc = path.join(src, 'client');
const serverSrc = path.join(src, 'server');
const serverInclude = [clientSrc, serverSrc];

export default {
  context: src,
  entry: {
    prerender: './client/routes/Routes.js',
  },
  target: 'node',
  output: {
    path: build,
    chunkFilename: '[name]_[chunkhash].js',
    filename: '[name].js',
    libraryTarget: 'commonjs2',
    publicPath: '/static/',
  },
  resolve: {
    extensions: ['.js'],
    modules: [src, 'node_modules'],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new ExtractTextPlugin('[name].css'),
    // tree shaking: eliminate dead codes
    new UglifyJSPlugin(),
    // compress bundled file to gzip
    new CompressionPlugin({ test: /\.js/ }),
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.DefinePlugin({
      '__CLIENT__': false,
      '__PRODUCTION__': true,
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
  module: {
    rules: [
      // JS
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules)/,
        include: serverInclude,
      },
      {
        test: /\.(eot|otf|ttf|woff|woff2)(\?.*)?$/,
        use: 'file-loader?name=fonts/[name].[ext]',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|webp|svg)(\?.*)?$/,
        use: 'file-loader?name=images/[name].[ext]',
      },
      // CSS
      {
        test: /\.css$/,
        include: serverInclude,
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
            'postcss-loader',
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
