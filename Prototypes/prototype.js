class Person{
    constructor(name, age ){
        this.name = name;
        this.age = age;
    }
    
  }
  
  Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
  };
  
  const person1 = new Person("Preetham",22);
  const person2 = new Person("Bob", 25);
  const person3 = new Person();
  
  person1.greet(); // Output: Hello, my name is Preetham and age is 22
  person2.greet(); // Output: Hello, my name is Bob and age is 25 
  person3.greet(); // Output: Hello, my name is undefined and age is undefined

  //---------------------------------------------------------------------------

  function Person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
  
  const person4 = new Person("Alice", 30);
  const person5 = new Person("Bob", 25);
  
  person4.greet(); // Output: Hello, my name is Alice
  person5.greet(); // Output: Hello, my name is Bob