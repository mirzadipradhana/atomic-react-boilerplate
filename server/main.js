'use strict';

import Express from 'express';
import Path from 'path';

import {APP_SETUP} from '../.configs';

let app = Express();

app.set('port', APP_SETUP.PORT);
app.disable('x-powered-by');

app.listen(app.get('port'), function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.log('Listening on port %s. Open up %s://%s:%s/ in your browser.', app.get('port'), APP_SETUP.PROTOCOL, APP_SETUP.HOST, app.get('port'));
});
