// /* Modified from: https://github.com/mxstbr/react-boilerplate */

// const Chalk = require('chalk');
// const IP = require('ip');

// const divider = Chalk.gray('-----------------------------------');

// /**
//  * Logger middleware, you can customize it to make messages more personal
//  */
// const logger = {

//   // Called whenever there's an error on the server we want to print
//   error: err => {
//     console.log(`\n${chalk.red(err)}`);
//   },

//   // Called when express.js app starts on given port w/o errors
//   appStarted: (options) => {
//     const hostAddress = `${options.protocol}://${options.host}:${options.port}`;
//     const ipAddress = `${options.protocol}://${IP.address()}:${options.port}`;
//     console.log(`\n
//       Server started ${Chalk.green('✓')}
//       ${Chalk.bold('Access URLs:')}
//       ${divider}
//       Host: ${Chalk.magenta(hostAddress)}
//         IP: ${Chalk.magenta(ipAddress)}
//       ${divider}
//       ${Chalk.blue(`Press ${Chalk.italic('CTRL-C')} to stop`)}
//     `);
//   },
// };

// module.exports = logger;
