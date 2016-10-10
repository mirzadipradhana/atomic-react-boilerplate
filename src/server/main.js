'use strict';

import Express from 'express';
import Webpack from 'webpack';
import Path from 'path';

import Logger from './libs/logger';
import { APP_SETUP } from '../../.configs';
import webpackHMR from './middlewares/webpackHMR.middleware';
const webpackConfig = process.env.NODE_ENV === 'production' ? require('./webpack/webpack.config.prod') : require('./webpack/webpack.config.dev');

const app = Express();

if (process.env.NODE_ENV !== 'production') {
  // Running webpack builder with NodeAPI with HMR middleware
  // //
  app.use(webpackHMR(webpackConfig));
} else {
  console.log('Production bundling...');
  let bundleStart = null;
  const builder = Webpack(webpackConfig);

  builder.plugin('compile', () => {
    console.log('Bundling ...');
    bundleStart = Date.now();
  });

  builder.plugin('done', () => {
    console.log(`Bundled in ${(Date.now() - bundleStart)}ms!`);
  });

  console.log(Path.join(__dirname, '../..', '/dist'));

  app.use(Express.static(Path.join(__dirname, '../..', '/dist'), { maxAge: APP_SETUP.CACHE_AGE }));
  app.get('*', (req, res) => {
    res.sendFile(Path.join(__dirname, '../..', 'dist/index.html'));
  });
}

app.set('port', (process.env.PORT || APP_SETUP.PORT));
app.disable('x-powered-by');

app.listen(app.get('port'), (err) => {
  if (err) {
    return Logger.error(err);
  }

  Logger.appStarted({ protocol: APP_SETUP.PROTOCOL, host: APP_SETUP.HOST, port: APP_SETUP.PORT });
});
