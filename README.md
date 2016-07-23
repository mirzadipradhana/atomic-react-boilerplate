# mirzadipradhana/atomic-react

Starter template for react and webpack which adapting [atomic design methodology](http://bradfrost.com/blog/post/atomic-web-design/) approach.

## Features

* Compilation with webpack
* React and jsx

## Local Installation

Install [node.js](https://nodejs.org)

Just clone this repo.

``` text
npm install
```

## Running on Vagrant

Install [vagrant](https://vagrantup.com)

``` text
vagrant up
vagrant ssh
cd /www
npm start
```


### Production Dependencies
| **Dependency** | **Use** |
|----------|-------|
|express|Serves development and production builds|
|react|React library |
|react-dom|React library for DOM rendering |

### Development Dependencies
| **Dependency** | **Use** |
|----------|-------|
|babel-cli|Babel Command line interface |
|babel-core|Babel Core for transpiling the new JavaScript to old |
|babel-eslint|Lints all Babel code with eslint |
|babel-loader|Adds Babel support to Webpack |
|babel-preset-es2015|Babel preset for ES2015|
|babel-preset-react| Add JSX support to Babel |
|babel-preset-react-hmre|Hot reloading preset for Babel|
|chalk|Terminal string styling |
|css-loader|Add CSS support to Webpack|
|dotenv|Loads environment variables from .env file|
|eslint|Lints JavaScript |
|eslint-config-airbnb|Airbnb's code styles rules to ESLint |
|eslint-plugin-import|Advanced linting of ES6 imports|
|eslint-plugin-jsx-a11y|Static AST checker for accessibility rules on JSX elements|
|eslint-plugin-react|Adds additional React-related rules to ESLint|
|extract-text-webpack-plugin| Extracts CSS into separate file for production build | 
|file-loader| Adds file loading support to Webpack |
|html-webpack-plugin|Simplifies creation of HTML files to serve your webpack bundles |
|ip|IP address utilities for node.js |
|json-loader|Add Json file support to Webpack |
|proggress-bar-webpack-plugin|A progress bar for Webpack |
|style-loader|Add Style support to Webpack |
|url-loader|Add url loading support to Webpack |
|webpack| Bundler with plugin system and integrated development server |
|webpack-dev-middleware| Adds middleware support to webpack |
|webpack-hot-middleware| Adds hot reloading to webpack |

