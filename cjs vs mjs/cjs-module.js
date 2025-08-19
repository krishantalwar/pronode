console.log('CJS module: start');

new Promise(resolve => {
  setTimeout(() => {
    console.log('CJS module: async done');
    resolve();
  }, 1000);
});

console.log('CJS module: end');
