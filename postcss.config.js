/* eslint-disable */
/* Set your postcss-loader configuration here */
var path = require('path');

const root = process.cwd();
const src = path.join(root, 'src', 'client', 'assets');

module.exports = (ctx) => {
  return {
    sourceMap: 'inline',
    plugins: [
      require('postcss-import')({ addDependencyTo: ctx.webpack }),
      require('postcss-cssnext')({ autoprefixer: { browsers: ['last 2 versions'] }, customProperties: false }),
      require('postcss-mixins')({ mixinsFiles: `${src}/css/mixins.css` }),
      require('postcss-nested')(),
      require('postcss-simple-vars')(),
    ],
  };
};
