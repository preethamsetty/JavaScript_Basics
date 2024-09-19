//Call
function greet(greeting, name) {
    console.log(greeting + ", " + this.name + "!");
  }
  
  const person = { name: "Alice" };
  greet.call(person, "Hello"); // Output: Hello, Alice!

  //-----------------------------------------------

//Apply

const numbers = [1, 2, 3];
Math.max.apply(null, numbers); // Output: 3

//--------------------------------------------------

//Bind

const greetAlice = greet.bind(person, "Hello");
greetAlice(); // Output: Hello, Alice!

//--------------------------------------------------

function add(a, b) {
    return a + b;
  }
  
  const add5 = add.bind(null, 5);
  console.log(add5(3)); // Output: 8