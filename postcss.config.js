/* Set your postcss-loader configuration here */
var config = require('./.configs');

module.exports = (ctx) => {
  return {
    sourceMap: 'inline',
    plugins: [
      require('postcss-import')({ addDependencyTo: ctx.webpack }),
      require('postcss-cssnext')({ autoprefixer: { browsers: ['last 2 versions'] }, customProperties: false }),
      require('postcss-mixins')({ mixinsFiles: `${config.PATH.ASSETS}/css/mixins.css` }),
      require('postcss-nested')(),
      require('postcss-simple-vars')(),
    ],
  };
};
