[![(a histogram of downloads)](https://nodei.co/npm-dl/unsquish.png?height=3)](https://npmjs.org/package/unsquish)

This module (`unsquish`) is an application that extracts Fidonet messages from Squish message bases and saves them in JAM.

This application is written in JavaScript (ECMAScript 6) and requires [Node.js](http://nodejs.org/) version 4.2.2 or newer.

## Installing the application

[![(npm package version)](https://nodei.co/npm/unsquish.png?downloads=true&downloadRank=true)](https://npmjs.org/package/unsquish)

### Installing as a global application

* Latest packaged version: `npm install -g unsquish`

* Latest githubbed version: `npm install -g https://github.com/Mithgol/node-unsquish/tarball/master`

The application becomes installed globally and appears in the `PATH`. Then use `unsquish` command to run the application.

### Installing as a portable application

Instead of the above, download the [ZIP-packed](https://github.com/Mithgol/node-unsquish/archive/master.zip) source code of the application and unpack it to some directory. Then run `npm install --production` in that directory.

You may now move that directory (for example, on a flash drive) across systems as long as they have the required version of Node.js installed.

Unlike the above (`npm -g`), the application does not appear in the `PATH`, and thus you'll have to run it directly from the application's directory. You'll also have to use `node unsquish [parameters]` instead of `unsquish [parameters]`.

## Testing the application

[![(build testing status)](https://img.shields.io/travis/Mithgol/node-unsquish/master.svg?style=plastic)](https://travis-ci.org/Mithgol/node-unsquish)

It is necessary to install [JSHint](http://jshint.com/) for testing.

* You may install JSHint globally (`npm install jshint -g`) or locally (`npm install jshint` in the directory of unsquish).

After that you may run `npm test` (in the directory of unsquish). Only the JS code errors are caught; the code's behaviour is not tested.

## License

MIT license (see the `LICENSE` file).