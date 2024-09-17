//1. Array.prototype.flat()

const arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat());        // [1, 2, 3, 4, [5, 6]]
console.log(arr.flat(2));       // [1, 2, 3, 4, 5, 6]

//----------------------------------------------------------

//2. Array.prototype.flatMap()

const arr1 = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]

//-----------------------------------------------------------

//3. String.prototype.trimStart() and String.prototype.trimEnd()

const str = '   Hello World!   ';
console.log(str.trimStart()); // 'Hello World!   '
console.log(str.trimEnd());   // '   Hello World!'

