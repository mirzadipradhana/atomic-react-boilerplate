// import Express from 'express';
// import Path from 'path';
// import Webpack from 'webpack';
// import WebpackDevMiddleware from 'webpack-dev-middleware';
// import WebpackHotMiddleware from 'webpack-hot-middleware';

// module.exports = (options) => {
//   let app = Express();
//   const builder = Webpack(options);
//   const middleware = WebpackDevMiddleware(builder, {
//     publicPath: options.output.publicPath,
//     stats: {
//       colors: true,
//       hash: false,
//       timings: true,
//       chunks: false,
//       chunkModules: false,
//       modules: false,
//     },
//   });

//   app.use(middleware);
//   app.use(WebpackHotMiddleware(builder));

//   app.use('*', function (req, res, next) {
//     const filename = Path.join(builder.outputPath, 'index.html')

//     middleware.waitUntilValid(() => {
//       res.write(middleware.fileSystem.readFileSync(filename));
//       res.end();
//     })
//   })

//   return app;
// }
