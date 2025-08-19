console.log('ESM module: start');

const data = await new Promise(resolve => {
  setTimeout(() => {
    console.log('ESM module: async done');
    resolve({ msg: 'data from ESM' });
  }, 1000);
});

console.log('ESM module: got', data);


