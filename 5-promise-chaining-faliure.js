var myPromise = createPromise('faliure', 'err1');
var myPromise2 = createPromise('success', 2);
var myPromise3 = createPromise('faliure', 'err3');


console.log('Promise state:', myPromise);
console.log('Promise2 state:', myPromise2);
console.log('Promise3 state:', myPromise3);

myPromise
  .then(function (val) {
    console.log('Promise 1 resolved to:', val);
    // return myPromise2;
    return myPromise2
  })
  .catch(function (err) {
    // Promise2 was rejected, so we skip the next .then and jump right down
    // to the next .catch
    console.log('rejected with:', err);
    console.log('This error was recoverable');
    return myPromise3;
  })
  .then(function (val) {
    console.log('The second .then resolve to:', val)
  })
  .catch(function (err) {
    console.log('rejected with:', err);
    console.log('This error is NOT recoverable');
  });


function createPromise (state, val) {
  return new Promise(function (resolve, reject) {
    if (state === 'success') {
      resolve(val);
    } else {
      reject(val);
    }
  });
}