//Closure examples

function outer(){
    let a=10;
    function inner(){
       console.log(a);
    }
    inner();
}
outer();

//example 2

function createCounter() {
    let count = 0;
  
    return function() {
      count++;
      return count;
    };
  }
  
  let counter = createCounter();
  console.log(counter()); // Output: 1  
  console.log(counter()); // Output: 2

  //Example 3

  function multiplier(factor) {
    return function(number) {
        return number * factor; // factor is remembered via closure
    };
}

const double = multiplier(2); // double becomes a function that multiplies by 2
const triple = multiplier(3); // triple becomes a function that multiplies by 3

console.log(double(5)); // 10
console.log(triple(5)); // 15
