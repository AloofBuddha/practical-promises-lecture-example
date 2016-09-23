var myPromise = createPromise('faliure', 'err1');
var myPromise2 = createPromise('success', 'err2');


console.log('Promise state:', myPromise);
console.log('Promise2 state:', myPromise2);

myPromise
  .then(function (val) {
    console.log('Promise 1 resolved to:', val);
    // we can return a Promise from our first .then
    return myPromise2;
  })
  .then(function (val) {
    // and when *that* Promise is resolve or rejected, its value is the
    // input to the next .then
    console.log('The second .then resolve to:', val)
  })
  .catch(function (err) {
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