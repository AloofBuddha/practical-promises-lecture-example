// we generally write the executor function inline
var myPromise = new Promise(function (resolve, reject) {
  // setTimeout(function () {
    var success = Math.random() <= 0.5;
    if (success) {
      resolve('success');
    } else {
      reject('faliure');
    }
  // }, 2000);
});

console.log('Promise state:', myPromise);

// success/faliure handlers can be split up into .then and .catch, my preferred method, especially when chaining is involved
// we also tend to include these functions inline as well
myPromise
  .then(function (val) {
    console.log('Promise resolved to:', val);
  })
  .catch(function (err) {
  console.log('Promise rejected with:', err);
  });



