// "Strict Mode"
// 'use strict';

// by default node support commonjs modeule system

var num =5;

console.log("ss",num)


// when we do require it execute all the code
// require is function. it accept file path. and return module.export 
// const abc = require('./abc');
// abc.myVar = 100;
// console.log(abc)
// console.log(abc.myVar)


// define gloable variable without gloable
// rember allways Function execute in gloable context. 
Function('myGlobalVar = 123')();

// const fn = Function('"use strict"; var x = 123; console.log(x);');
// fn();





globalThis.kk=55;

global.ryt=558;

console.log("rrr")

// gloabel variavble . if we not use strict mode. it is by default gloable variable. if we use strict mode it give refercen error 
a= 7987;

// common and es6 modeule system