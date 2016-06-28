'use strict';

/**
 * Don't change
 */

var Path = require('path');

module.exports = {
  ASSETS: Path.join(__dirname, '..', 'src/assets'),
  CLIENT_SRC: Path.join(__dirname, '..', 'src'),
  SERVER_SRC: Path.join(__dirname, '..', 'server'),
  TEMPLATES: Path.join(__dirname, '..', 'server/templates'),
  WEBPACK_OUTPUT: Path.join(__dirname, '..', 'dist/server')
};