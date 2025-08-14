// let a=66;
// var vv=69;

// console.log("Eee");


// in broweser window is gloable object and in node js it is global



// In modern JavaScript (ES2020+), there's a unified global object:

// globalThis

// This works in both environments:

//  globalThis – The Unified Global Object
// Introduced in ES2020, globalThis provides a standard, cross-environment way to access the global object, whether you're in:

// A browser

// Node.js

// A Web Worker

// Other JS environments

//  Why globalThis Was Needed
// Before globalThis, accessing the global object required environment-specific code:

// In browsers: window or self (for web workers)

// In Node.js: global

// This made cross-platform code messy:


// // Old (not reliable across environments)
var getGlobal = function () {
  if (typeof self !== 'undefined') return self;
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  throw new Error('Unable to locate global object');
};


// With globalThis, this becomes simple:

const globalObj = globalThis;

console.log(globalObj);