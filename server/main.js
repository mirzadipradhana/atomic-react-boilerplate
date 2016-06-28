'use strict';

import Express from 'express';
import Webpack from 'webpack';
import Path from 'path';

import {APP_SETUP} from '../.configs';
const webpackConfig = require('../webpack/webpack.config.dev');

let app = Express();

// Running webpack builder with NodeAPI 
////
const builder = Webpack(webpackConfig, (err, stats) => {
  if (err) {
    throw console.log(err);
  } else {
    console.log(
      stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true,
        hash: false,
        chunkModules: false
      })
    );
  }
});

app.set('port', APP_SETUP.PORT);
app.disable('x-powered-by');

app.use(Express.static(Path.join(__dirname, '..', 'dist')));
app.get('*', function response(req, res) {
  res.sendFile(Path.join(__dirname, '..', 'dist/server/index.html'));
});

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port %s. Open up %s://%s:%s/ in your browser.', app.get('port'), APP_SETUP.PROTOCOL, APP_SETUP.HOST, app.get('port'));
});
