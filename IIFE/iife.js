// Immediately Invoked Function Expressions (IIFEs) in JavaScript

(function() {
    console.log('Preetham ');
  })();

  //------------------------------------

//Example 

(function() {
    let privateVariable = "secret";
  
    function privateFunction() {
      console.log(privateVariable);
    }
  
    privateFunction();
  })();

// In this example, the IIFE creates a private scope, and the privateVariable and privateFunction are only 
// accessible within that scope.

//-----------------------------------------------------------------------

// This IIFE creates a private counter object with methods to increment, decrement, and get the current value. 
//The count variable remains private within the IIFE

const counter = (function() {
    let count = 0;
  
    return {
      increment: function() {
        count++;
      },
      decrement: function() {
        count--;
      },
      getValue: function() {
        return count;
      }
    };
  })();
  
  counter.increment();   //1
  counter.increment();   //2
  counter.decrement();   //1
  counter.increment();   //2
  counter.decrement();   //1
  console.log(counter.getValue()); // Output: 1

  //----------------------------------------------------------------------

  

