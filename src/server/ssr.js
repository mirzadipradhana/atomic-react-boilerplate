// Libraries
import React from 'react';
import { renderToString } from 'react-dom/server';
import createHistory from 'history/createMemoryHistory';
import fs from 'fs';
import { basename, join } from 'path';

import createStore from '../client/configureStore.js';

// Components
import Html from './Html.js';

function renderApp(url, res, store, assets) {
  const context = {};

  const html = renderToString(
    <Html
      title="💥"
      store={store}
      url={url}
      context={context}
      assets={assets}
    />
  );

  res.send('<!DOCTYPE html>'+html);
}

export const renderPage = function (req, res) {
  const history = createHistory();
  const store = createStore(history);

  const assets = require('../../build/assets.json');

  assets.manifest.text = fs.readFileSync(
    join(__dirname, '..', '..', 'build', basename(assets.manifest.js)),
    'utf-8'
  );

  renderApp(req.url, res, store, assets);
};

export const renderDevPage = function (req, res) {
  const history = createHistory();
  const store = createStore(history);
  renderApp(req.url, res, store);
};
