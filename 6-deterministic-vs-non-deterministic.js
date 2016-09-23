var myPromise = createPromise('success', 1);
var myPromise2 = createPromise('success', 2);
var myPromise3 = createPromise('success', 3);
var myPromise4 = createPromise('success', 4);


console.log('Promise state:', myPromise);
console.log('Promise2 state:', myPromise2);
console.log('Promise3 state:', myPromise3);
console.log('Promise4 state:', myPromise4);

// due to chaining myPromise2 is GUARANTEED to be resolved after myPromise
myPromise4
  .then(function (val) {
    console.log(val);
    return myPromise3;
  })
  .then(function (val) {
    console.log(val);
    return myPromise2;
  })
  .then(function (val) {
    console.log(val);
    return myPromise;
  })
  .then(function(val) {
    console.log(val);
  });

// myPromise.then(function (val) {
//   console.log(val);
// })

// myPromise2.then(function (val) {
//   console.log(val);
// })

// myPromise3.then(function (val) {
//   console.log(val);
// })

// myPromise4.then(function (val) {
//   console.log(val);
// })

function createPromise (state, val) {
  var time = Math.random() * 2000 + 2000;
  return new Promise(function (resolve, reject) {
    setTimeout(function() {
      if (state === 'success') {
        resolve(val);
      } else {
        reject(val);
      }
    }, time);
  });
}