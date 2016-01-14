var cl = require('ciel');
var fidoconfig = require('fidoconfig');
var Squish = require('fidonet-squish');

var clog = console.log;

module.exports = filenameHPT => {
   cl.status(`Operating on area descriptions from ${filenameHPT}`);
   var echoconf = fidoconfig.areas(filenameHPT);
   var areaPaths = echoconf.getAreaNames().reduce((prevArr, nextName) => {
      var nextArea = echoconf[nextName];
      if( nextArea.passthrough ){
         cl.skip(`Area ${nextArea.configName} is passthough. Skipped.`);
         return prevArr;
      }
      return prevArr.concat({
         areaName: nextArea.configName,
         areaPath: nextArea.path
      });
   }, []);
   var varPaths = areaPaths.filter(
      nextAreaPath => /\[.*\]/.test(nextAreaPath.areaPath)
   );
   if( varPaths.length > 0 ){
      cl.fail('Unsquish cannot process [variables] in echobase paths.');
      varPaths.forEach(nextVarPath =>
         clog(`${nextVarPath.areaName}: ${nextVarPath.areaPath}.`)
      );
      clog('');
      return;
   }
};