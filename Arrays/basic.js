
// 1. Array length
let arr1 = [1, 2, 3, 4, 5];
console.log(arr1.length); // 5


// 2. Array toString()
let arr2 = [1, 2, 3];
console.log(arr2.toString()); // "1,2,3"


// 3. Array at()
let arr3 = [10, 20, 30, 40];
console.log(arr3.at(2));  // 30 (positive index)
console.log(arr3.at(-1)); // 40 (negative index, last element)


// 4. Array join()
let arr4 = ['a', 'b', 'c'];
console.log(arr4.join("-")); // "a-b-c"


// 5. Array pop()
let arr5 = [1, 2, 3];
let lastElement = arr5.pop();
console.log(lastElement); // 3
console.log(arr5);        // [1, 2]


// 6. Array push()
let arr6 = [1, 2];
let newLengthPush = arr6.push(3, 4);
console.log(newLengthPush); // 4
console.log(arr6);          // [1, 2, 3, 4]


// 7. Array shift()
let arr7 = [1, 2, 3];
let firstElement = arr7.shift();
console.log(firstElement);  // 1
console.log(arr7);          // [2, 3]


// 8. Array unshift()
let arr8 = [2, 3];
let newLengthUnshift = arr8.unshift(1);
console.log(newLengthUnshift); // 3
console.log(arr8);             // [1, 2, 3]


// 9. Array delete
let arr9 = [1, 2, 3, 4];
delete arr9[2]; // Deletes the element at index 2
console.log(arr9);        // [1, 2, undefined, 4]
console.log(arr9.length); // 4 (length is unaffected)


// 10. Array concat()
let arr10_1 = [1, 2];
let arr10_2 = [3, 4];
let mergedArr = arr10_1.concat(arr10_2);
console.log(mergedArr);   // [1, 2, 3, 4]


// 11. Array copyWithin()
let arr11 = [1, 2, 3, 4, 5];
arr11.copyWithin(0, 3);   // Copy elements starting at index 3 to index 0
console.log(arr11);       // [4, 5, 3, 4, 5]


// 12. Array flat()
let arr12 = [1, [2, [3, 4]]];
let flatArr = arr12.flat(2); // Flatten 2 levels deep
console.log(flatArr);        // [1, 2, 3, 4]


// 13. Array splice()
let arr13 = [1, 2, 3, 4, 5];
arr13.splice(2, 1, "a", "b"); // Remove 1 element at index 2, add "a" and "b"
console.log(arr13);           // [1, 2, "a", "b", 4, 5]


// 14. Array toSpliced() (ES2023)
let arr14 = [1, 2, 3, 4, 5];
let newArr = arr14.toSpliced(2, 1, "a", "b"); // Removes 1 element at index 2
console.log(newArr);          // [1, 2, "a", "b", 4, 5]
console.log(arr14);           // [1, 2, 3, 4, 5] (original array unchanged)


// 15. Array slice()
let arr15 = [1, 2, 3, 4, 5];
let slicedArr = arr15.slice(1, 3); // Extract from index 1 to 3 (not inclusive)
console.log(slicedArr);            // [2, 3]


//This code block includes examples of all the array methods you asked for, with enough space between each operation to improve readability. Let me know if you'd like further clarification!