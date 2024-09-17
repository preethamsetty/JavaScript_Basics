function myFunction() {
    console.log(x); // Output: undefined (x is hoisted, but not initialized yet)
    var x = 10;
    console.log(x); // Output: 10
  }
  
  myFunction();