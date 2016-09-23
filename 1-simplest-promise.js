// Promise represents a value that *will be resolved later*
// it takes a function 'executor' which itself takes two functions, 'resolve' and 'reject'

var myPromise = new Promise(executor);

// A promise is available for inspection immediately (sync)
// It is in one of 3 stats: pending, resolved or rejected

console.log('Promise state:', myPromise);

// success/faliure handlers are added to the Promise object (sync)

myPromise.then(onResolve, onReject);

// the executor function runs IMMEDIATELY when the promise is created(sync)

function executor(resolve, reject) {
  // reject('faliure in myPromise executor')
  resolve('success in myPromise executor')
  var success = Math.random() <= 0.5;
  if (success) {
    resolve('success'); // resolve is called on success cases, with some (optional) value
  } else {
    reject('faliure');  // reject is called on faliure cases, with some (optional) value
  }
}

// the success/faliure handlers are only run when the executor calls resolve/reject

function onResolve (val) {
  console.log('Promise resolved to:', val);
  throw new Error('Faliure in onResolve');
}

function onReject (err) {
  console.log('Promise rejected with:', err);
}
