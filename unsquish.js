#!/usr/bin/env node

var unsquish = require('./');
var clog = console.log;

var params = [].concat(process.argv);
params.shift(); // 'node'
params.shift(); // 'unsquish'

var rusMode = false;
params = params.filter(nextParam => {
   if( nextParam.toLowerCase() === '--rus' ){
      rusMode = true;
      return false;
   }

   return true;
});

if( params.length < 1 ){
   clog('');
   if( rusMode ){
      clog('Использование:');
      clog('   unsquish configHPT');
      clog('');
      clog('Параметры:');
      clog('');
      clog('configHPT -- путь к файлу конфигурации областей эхопочты HPT.');
      clog('');
      clog('Необязательный параметр "--rus" предписывает приложению');
      clog('употребление русских сообщений вместо английских.');
      clog('');
      clog('(Воздействует только на вывод в консоли, не на выходные файлы.)');
   } else {
      clog('Usage:');
      clog('   unsquish configHPT');
      clog('');
      clog('Parameters:');
      clog('');
      clog('configHPT -- path to the HPT echomail area configuration file.');
      clog('');
      clog('An optional "--rus" parameter dictates the application to use');
      clog('Russian messages instead of English.');
      clog('');
      clog('(It only affects console output, not the output files.)');
   }
   process.exit(1);
}

var filenameHPT = params.pop();

unsquish(filenameHPT);