// Passing functions as arguments:
function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
  }
  
  function sayGoodbye() {
    console.log("Goodbye!");
  }
  
  greet("Alice", sayGoodbye);

  //---------------------------------------------------

  //Returning functions:
  function createGreeter(greeting) {
    return function(name) {
      console.log(greeting + ", " + name + "!");
    };
  }
  
  const greetHello = createGreeter("Hello");
  const greetHi = createGreeter("Hi");
  
  greetHello("Bob"); // Output: Hello, Bob!
  greetHi("Alice"); // Output: Hi, Alice!

  //