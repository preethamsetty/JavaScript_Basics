// Global scope example
let globalVariable = "I am global";

function displayGlobal() {
  console.log(globalVariable);  // Can access the global variable
}

displayGlobal();  // Output: I am global

console.log(globalVariable);  // Output: I am global


//function scope example

function showMessage() {
    let message = "Hello from function";
    console.log(message);  // Accessible inside the function
  }
  
  showMessage();  // Output: Hello from function
  
  // console.log(message);  // Error: message is not defined (outside function scope)

  //Block scope example

  if (true) {
    let blockScopedVar = "I am block-scoped";
    console.log(blockScopedVar);  // Output: I am block-scoped
  }
  
  // console.log(blockScopedVar);  // Error: blockScopedVar is not defined
  

  
