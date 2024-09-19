//1. then(onFulfilled, onRejected):

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise fulfilled!");
    }, 1000);
  });
  
  promise.then(result => {
    console.log(result); // Output: Promise fulfilled!
  })
  .catch(error => {
    console.error(error);
  });

  //--------------------------------------------------
  //2. catch(onRejected):

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Promise rejected");
    }, 1000);
  });
  
  promise1.catch(error => {
    console.error(error); // Output: Promise rejected
  });
//-----------------------------------------------------
  //3.finally(onFinally):

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise fulfilled!");
    }, 1000);
  });
  
  promise2.then(result => {
    console.log(result); // Output: Promise fulfilled!
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Finally block executed");
  });
  //--------------------------------------------------------
  //4. all(promises):
  const promise3 = Promise.resolve("Promise 3 fulfilled");
const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 4 fulfilled");
  }, 2000);
});

Promise.all([promise3, promise4])
  .then(results => {
    console.log(results); // Output: ["Promise 3 fulfilled", "Promise 4 fulfilled"]
  })
  .catch(error => {
    console.error(error);
  });

  //-----------------------------------------------------------

  //5. allSettled(promises):

  const promise5 = Promise.resolve("Promise 5 fulfilled");
const promise6 = Promise.reject("Promise 6 rejected");

Promise.allSettled([promise5, promise6])
  .then(results => {
    console.log(results); // Output: [{ status: 'fulfilled', value: 'Promise 5 fulfilled' }, { status: 'rejected', reason: 'Promise 6 rejected' }]
  });

  //-----------------------------------------------------------

  //6. race(promises):

  const promise7 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 7 fulfilled");
    }, 2000);
  });
  
  const promise8 = Promise.reject("Promise 2 rejected");
  
  Promise.race([promise7, promise8])
    .then(result => {
      console.log(result); // Output: Promise 8 rejected
    })
    .catch(error => {
      console.error(error);
    });

    //----------------------------------------------------------
//7. resolve(value):

const fulfilledPromise = Promise.resolve("Promise fulfilled");

//----------------------------------------------------------------------

//8. reject(reason):

const rejectedPromise = Promise.reject("Promise rejected");