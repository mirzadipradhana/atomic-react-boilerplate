'use strict';

import Express from 'express';
import Webpack from 'webpack';
import Path from 'path';

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
    console.log(err);
  }
  console.log('\nListening on port %s. Open up %s://%s:%s/ in your browser.', app.get('port'), APP_SETUP.PROTOCOL, APP_SETUP.HOST, app.get('port'));
});
