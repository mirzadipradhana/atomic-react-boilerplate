'use strict';

/**
 * Don't change
 */

require('dotenv').config({silent: true});

var host, port, protocol, isDev;
if (process.env.NODE_ENV === 'production') {
  isDev = false;
  host = process.env.PROD_HOST;
  port = process.env.PROD_PORT;
  protocol = process.env.PROD_PROTOCOL;
} else {
  isDev = true;
  host = process.env.DEV_HOST;
  port = process.env.DEV_PORT;
  protocol = process.env.DEV_PROTOCOL;
}

module.exports = {
  IS_DEV: isDev || false,
  HOST: host || 'localhost',
  PORT: port || 8000,
  PROTOCOL: protocol || 'https',
  CACHE_AGE: process.env.CACHE_AGE || 31536000000
};
