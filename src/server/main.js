'use strict';

import Express from 'express';

import Logger from './libs/logger';
import { APP_SETUP } from '../../.configs';
import webpackHMR from './middlewares/webpackHMR.middleware';
const webpackConfig = require('./webpack/webpack.config.dev');

const app = Express();

// Running webpack builder with NodeAPI with HMR middleware
// //
app.use(webpackHMR(webpackConfig));

app.set('port', APP_SETUP.PORT);
app.disable('x-powered-by');

app.listen(app.get('port'), (err) => {
  if (err) {
    return Logger.error(err);
  }

  Logger.appStarted({ protocol: APP_SETUP.PROTOCOL, host: APP_SETUP.HOST, port: APP_SETUP.PORT });
});
