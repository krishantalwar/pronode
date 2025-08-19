// Simulate API
function fakeFetch() {
  console.log('CJS: Starting fakeFetch');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('CJS: fakeFetch resolved');
      resolve({ message: 'Hello from CJS' });
    }, 1000);
  });
}

const resultd = fakeFetch(); // This returns a Promise

console.log('CJS: After calling fakeFetch');

resultd.then(data => {
  console.log('CJS: Got result:', data);
});













// Simulate API
function fakeFetch() {
  console.log('ESM: Starting fakeFetch');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('ESM: fakeFetch resolved');
      resolve({ message: 'Hello from ESM' });
    }, 1000);
  });
}

// Top-level await (ESM only)
const results = await fakeFetch();

console.log('ESM: After calling fakeFetch');


console.log('ESM: Got result:', results);















function fakeFetch() {
  console.log('fakeFetch: start');
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('fakeFetch: done');
      resolve({ msg: 'ok' });
    }, 2000);
  });
}

setTimeout(() => {
  console.log('setTimeout: ran during fetch wait');
}, 1000);

const result = await fakeFetch();

console.log('Got result:', result);

















// | Feature                      | CommonJS (`require`)    | ESM (`import`)                  |
// | ---------------------------- | ----------------------- | ------------------------------- |
// | Import mechanism             | Dynamic (function call) | Static (analyzed at parse time) |
// | Hoisting                     | ❌ No                    | ✅ Yes                           |
// | Execution order              | Top to bottom           | Dependencies first              |
// | Circular dependency handling | Partial                 | Better, due to hoisting         |
// | Top-level `await` support    | ❌ No                    | ✅ Yes                           |






// | Feature                 | CJS (`require`) | ESM (`import`)             |
// | ----------------------- | --------------- | -------------------------- |
// | Top-level `await`       | ❌ Not allowed   | ✅ Allowed                  |
// | `await` in async IIFE   | ✅ Allowed       | ✅ Allowed                  |
// | Module loading behavior | Always sync     | Can be async               |
// | `require()` waits?      | ❌ No            | ❌ No (ESM handles linking) |
// | `import` waits?         | ❌ No            | ✅ Yes                      |





// | Feature / Behavior        | **CommonJS (CJS)**                         | **ES Modules (MJS)**                         |
// | ------------------------- | ------------------------------------------ | -------------------------------------------- |
// | File extension            | `.js` (default), `.cjs`                    | `.mjs`, or `.js` with `"type": "module"`     |
// | Import syntax             | `const x = require('x')`                   | `import x from 'x'` (or `import {x}`)        |
// | Export syntax             | `module.exports = x` or `exports.x = y`    | `export default x`, `export const y = z`     |
// | Module loading            | **Synchronous**                            | **Asynchronous** (can use top-level `await`) |
// | Top-level `await` support | ❌ Not supported                            | ✅ Supported                                  |
// | Load time                 | Immediate                                  | May **wait** for `await` in module           |
// | `__dirname`, `__filename` | ✅ Available                                | ❌ Not available (use `import.meta.url`)      |
// | Dynamic import            | `require(...)` — sync                      | `await import(...)` — async                  |
// | Circular dependencies     | Resolved at runtime                        | Must be carefully structured                 |
// | Interop with other format | CJS can `require()` CJS/JSON/node\_modules | ESM can import CJS with `createRequire`      |
// | Node.js default           | ✅ Default in most projects                 | ✅ Preferred for modern apps                  |
