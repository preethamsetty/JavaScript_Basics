// functions example
function greet(name) {
    return "Hello, " + name + "!";
  }
  
  console.log(greet("Alice"));  // Output: Hello, Alice!

  //Synchronous functions
  function taskA() {
    console.log("Task A");
  }
  
  function taskB() {
    console.log("Task B");
  }
  
  taskA();
  taskB();  // Output: Task A, Task B (executed sequentially)

  //Arrow functions

  const greet = (name) => {
    return "Hello, " + name + "!";
  };
  
  console.log(greet("Alice"));  // Output: Hello, Alice!

  const add = (a, b) => a + b;
console.log(add(2, 3));  // Output: 5

//Asynchronous function

async function fetchUser() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/1");  // Fetch data from a URL
      const user = await response.json();  // Wait for the response to be converted to JSON
      console.log(user);
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }
  
  fetchUser();
  


