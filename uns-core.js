var cl = require('ciel');
var fidoconfig = require('fidoconfig');
var Squish = require('fidonet-squish');

var clog = console.log;

module.exports = filenameHPT => {
   cl.status(`Operating on area descriptions from ${filenameHPT}`);
   var echoconf = fidoconfig.areas(filenameHPT);
};