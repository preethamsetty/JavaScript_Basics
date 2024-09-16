//Callback example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
  }
  
  function displayMessage() {
    console.log("This is a callback function.");
  }
  
  greet("Preetham", displayMessage);
//-------------------------------------------------------

//Callback in asynchronous functions
function delayedGreeting(name, callback) {
    setTimeout(() => {
      console.log(`Hello, ${name}!`);
      callback();
    }, 2000); // 2 second delay
  }
  
  function afterGreeting() {
    console.log("This message appears after the greeting.");
  }
  
  delayedGreeting("Preetham", afterGreeting);
  
  //--------------------------------------------------------
  //callback in fetching data
  function fetchData(callback) {
    setTimeout(() => {
      const data = { id: 1, name: "John Doe" };
      callback(data);
    }, 3000); // Simulate a 3-second API response delay
  }
  
  function displayData(data) {
    console.log("Fetched Data:", data);
  }
  
  fetchData(displayData);
//-----------------------------------------------------------------

//
  