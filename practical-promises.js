// lets make a Promise

// Def: A Promise is a proxy for a value not necessarily
// known when the promise is created.
// It can be in one of 3 states
//    Pending: Not yet resolved or rejected
//    Resolved: Success case, will execute the next .then()
//    Rejected: Faliure case, will execture the next .catch()

console.log('1) PROMISE object creation STARTS (sync)');

var promiseObj = new Promise(executor);

// a promise is 'defined' by an 'executor' function
// As the name might imply, the executor function is
// executed *immediately*.
//
// the executor function takes two parameters
//
//    resolve: a fn to be called on 'success'
//    reject:  a fn to be called on 'faliure'

function executor(resolve, reject) {
  // in here we will likely kick off some async code
  // we call resolve if it returns a success, reject otherwise
  console.log('2) EXECUTOR function STARTS (sync)');

  console.log("3) ASYNC function is INITIALIZED (sync)");

  // we will mock Async with a timeout
  setTimeout(function () {
  // after 2 seconds, this code will run
    console.log('7) ***ASYNC function is EXECUTED (async)***');
    if (Math.random() < 0.5) {
      console.log('\tresolving with SUCCESS');
      resolve('GREAT JOB!');
    } else {
      console.log('\trejecting with FALIURE')
      reject('TRY AGAIN, BRUH!');
    }
  }, 2000);

  console.log('4) EXECUTOR function FINISHES');
}

console.log('5) PROMISE object creation FINISHES (sync)');

console.log('\tPromise is just an object', promiseObj);

console.log('6) Adding .then and .catch behavior (sync)');

// we add the .then and .catch behavior to the promise
// note that the promise may not be resolve/rejected yet.
// what we are doing here is just describing the logic for *how*
// to react when it is eventually resolve or rejected

promiseObj
  .then(function (value) {
    console.log('8) Success case: .then function runs (async)')
    console.log('\t got value:', value);
  })
  .then(function (value) {
    console.log('9) 8 is already done!')

  })
  .then(function () {

  })
  .catch(function (err) {
    console.log('8) Faliure case: .catch function runs (async)')
    console.log('\t got err:', err);
  });



