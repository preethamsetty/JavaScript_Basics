//Synchronous vs Asynchronous Code

console.log('Start');

setTimeout(() => {
  console.log('This is from the setTimeout');
}, 2000);

console.log('End');

//------------------------------------------------------------------------
//Event Loop with Promises

console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise callback');
});

console.log('End');
//---------------------------------------------------------------------------
//blocking the event loop
console.log('Start');

setTimeout(() => {
  console.log('Timeout callback');
}, 1000);

for (let i = 0; i < 1000000000; i++) {
  // Simulate long-running task
}

console.log('End');
//-----------------------------------------------------------------------------

//Fetching Data

console.log('Start');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json));

console.log('End');
//------------------------------------------------------------------------------
