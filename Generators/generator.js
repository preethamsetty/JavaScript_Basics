//Example for generator
function* generateNumbers() {
    for (let i = 1; i <= 5; i++) {
      yield i;
    }
  }
  
  const generator = generateNumbers();
  
  console.log(generator.next()); // Output: { value: 1, done: false }
  console.log(generator.next()); // Output: { value: 2, done: false }
  console.log(generator.next()); // Output: { value: 3, done: false }
  console.log(generator.next()); // Output: { value: 4, done: false }
  console.log(generator.next()); // Output: { value: 5, done: false }
  console.log(generator.next()); // Output: { value: undefined, done: true }

  //------------------------------------------------------------------------

  //Fibonnaci series generator

  function* fibonacci() {
    let a = 0;
    let b = 1;
  
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const fibGenerator = fibonacci();
  
  for (let i = 0; i < 10; i++) {
    console.log(fibGenerator.next().value);
  }