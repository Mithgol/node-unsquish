var path = require('path');
var async = require('async');
var cl = require('ciel');
var fidoconfig = require('fidoconfig');
var Squish = require('fidonet-squish');

var clog = console.log;

module.exports = (filenameHPT, options) => {
   var dirnameHPT = path.dirname(filenameHPT);
   if( options.rusMode ){
      cl.status(`Работаем по описаниям областей из ${filenameHPT}`);
   } else cl.status(`Operating on area descriptions from ${filenameHPT}`);
   var echoconf = fidoconfig.areas(filenameHPT);
   var areaPaths = echoconf.getAreaNames().reduce((prevArr, nextName) => {
      var nextArea = echoconf[nextName];
      if( nextArea.passthrough ){
         if( options.rusMode ){
            cl.skip(
               `Область ${nextArea.configName} пропущена, так как passthough.`
            );
         } else {
            cl.skip(`Area ${nextArea.configName} is passthough. Skipped.`);
         }
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
      if( options.rusMode ){
         cl.fail(
            'Unsquish не умеет обрабатывать [переменные] в путях к эхобазам.'
         );
      } else cl.fail(
         'Unsquish cannot process [variables] in echobase paths.'
      );
      varPaths.forEach(nextVarPath =>
         clog(`${nextVarPath.areaName}: ${nextVarPath.areaPath}.`)
      );
      clog('');
      return;
   }
   areaPaths = areaPaths.map(nextAreaPath => ({
      areaName: nextAreaPath.areaName,
      areaPath: path.resolve(dirnameHPT, nextAreaPath.areaPath)
   }));
   async.eachSeries(
      areaPaths,
      (nextAreaPath, donePath) => {
         var sqBase = Squish(nextAreaPath);
         sqBase.readAllHeaders((err, sqHeaders) => {
            if( err ) return donePath(err);
            async.eachSeries(
               sqHeaders,
               (nextSquishHeader, doneHeader) => {
               },
               err => {
               }
            );
         });
      },
      err => {
      }
   );
};