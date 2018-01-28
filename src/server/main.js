'use strict';

import http from 'http';
import express from 'express';

// import Logger from './libs/logger';

// Server Side Rendering
import {
  renderPage,
  renderDevPage,
} from './ssr.js';

const IS_PROD = process.env.NODE_ENV === 'production';

const app = express();


if (IS_PROD) {
  // serve compressed file
  app.get('*.js', (req, res, next) => {
    req.url = `${req.url}.gz`;
    res.set('Content-Encoding', 'gzip');
    next();
  });

  app.use('/static', express.static('build'));
  app.get('*', renderPage);
} else {
  // Hot Module Reloading
  const webpack = require('webpack');
  const devWebpackConfig = require('../../webpack/webpack.config.development.js');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(devWebpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: devWebpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true,
  }));

  app.get('*', renderDevPage);
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
if (!IS_PROD) {
  // development
  app.use(function(err, req, res, next) {
    console.error('error : ', err.message);
    res.status(err.status || 500);
  });
}

const server = http.createServer(app);
app.set('port', (process.env.PORT || 8080));
app.disable('x-powered-by');

server.listen(app.get('port'), function() {
   const address = server.address();
   console.log(`>>> Listening on: localhost::${address.port}`);
});
