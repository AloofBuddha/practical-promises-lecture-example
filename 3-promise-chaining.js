var myPromise = createPromise('faliure', 'error');

console.log('Promise state:', myPromise);

myPromise
  .then(function (val) {
    console.log('Promise state:', myPromise);
    console.log('Promise resolved to:', val);
    // we can return a value from our first .then
    return 2;
  })
  .then(function (val) {
    // console.log('Promise state:', myPromise);
    // and that value will be the input to the next .then
    console.log('The second .then resolve to:', val)
  })
  .catch(function (err) {
    console.log('Promise state:', myPromise);
    console.log('Promise rejected with:', err);
  });


function createPromise (state, val) {
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (state === 'success') {
        resolve(val);
      } else {
        reject(val);
      }
    }, 2000);
  });
}