'use strict';

import Express from 'express';
import Webpack from 'webpack';
import Path from 'path';

import Logger from './logger';
import {APP_SETUP} from '../.configs';
import webpackHMR from './middlewares/webpackHMR.middleware';
const webpackConfig = require('../webpack/webpack.config.dev');

let app = Express();

// Running webpack builder with NodeAPI with HMR middleware
////
app.use(webpackHMR(webpackConfig));

app.set('port', APP_SETUP.PORT);
app.disable('x-powered-by');

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    return Logger.error(innerErr);
  }

  Logger.appStarted({ protocol: APP_SETUP.PROTOCOL, host: APP_SETUP.HOST, port: APP_SETUP.PORT });
});
