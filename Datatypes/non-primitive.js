// objects:

let person = {
    name: "Alice",
    age: 25,
    isStudent: true,
    greet: function() {
      return `Hello, my name is ${this.name}`;
    }
  };
  
  console.log(person.name);  // Output: Alice
  console.log(person.greet());  // Output: Hello, my name is Alice
  
  // Adding a new property
  person.city = "New York";
  console.log(person.city);  // Output: New York

  
  //Arrays

  let fruits = ["Apple", "Banana", "Cherry"];

console.log(fruits[0]);  // Output: Apple

// Adding a new element to the array
fruits.push("Orange");
console.log(fruits);  // Output: ["Apple", "Banana", "Cherry", "Orange"]

// Accessing length
console.log(fruits.length);  // Output: 4


