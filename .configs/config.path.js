'use strict';

/**
 * Don't change
 */

var Path = require('path');

module.exports = {
  ASSETS: Path.join(__dirname, '..', 'src/client/assets'),
  CLIENT_SRC: Path.join(__dirname, '..', 'src/client/'),
  SERVER_SRC: Path.join(__dirname, '..', 'src/server'),
  TEMPLATES: Path.join(__dirname, '..', 'src/server/templates'),
  WEBPACK_OUTPUT: Path.join(__dirname, '..', 'dist/server')
};
