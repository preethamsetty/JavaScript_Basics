// 1. String length
let str1 = "Hello World";
console.log(str1.length); // Output: 11

// 2. String charAt()
let str2 = "Hello";
console.log(str2.charAt(1)); // Output: "e"

// 3. String charCodeAt()
let str3 = "A";
console.log(str3.charCodeAt(0)); // Output: 65

// 4. String at()
let str4 = "Hello";
console.log(str4.at(1));   // Output: "e"
console.log(str4.at(-1));  // Output: "o"

// 5. String [ ] (Bracket notation)
let str5 = "Hello";
console.log(str5[1]); // Output: "e"

// 6. String slice()
let str6 = "JavaScript";
console.log(str6.slice(0, 4));   // Output: "Java"
console.log(str6.slice(-6));     // Output: "Script"

// 7. String substring()
let str7 = "JavaScript";
console.log(str7.substring(0, 4)); // Output: "Java"
console.log(str7.substring(4));    // Output: "Script"

// 8. String substr() (deprecated)
let str8 = "JavaScript";
console.log(str8.substr(0, 4));  // Output: "Java"
console.log(str8.substr(4, 6));  // Output: "Script"

// 9. String toUpperCase()
let str9 = "Hello World";
console.log(str9.toUpperCase()); // Output: "HELLO WORLD"

// 10. String toLowerCase()
let str10 = "HELLO WORLD";
console.log(str10.toLowerCase()); // Output: "hello world"

// 11. String concat()
let str11a = "Hello";
let str11b = "World";
console.log(str11a.concat(" ", str11b)); // Output: "Hello World"

// 12. String trim()
let str12 = "  Hello World  ";
console.log(str12.trim()); // Output: "Hello World"

// 13. String trimStart()
let str13 = "  Hello World";
console.log(str13.trimStart()); // Output: "Hello World"

// 14. String trimEnd()
let str14 = "Hello World  ";
console.log(str14.trimEnd()); // Output: "Hello World"

// 15. String padStart()
let str15 = "5";
console.log(str15.padStart(3, "0")); // Output: "005"

// 16. String padEnd()
let str16 = "5";
console.log(str16.padEnd(3, "0")); // Output: "500"

// 17. String repeat()
let str17 = "Hi";
console.log(str17.repeat(3)); // Output: "HiHiHi"

// 18. String replace()
let str18 = "Hello World";
console.log(str18.replace("World", "JavaScript")); // Output: "Hello JavaScript"

// 19. String replaceAll()
let str19 = "Hello World. Welcome to the World!";
console.log(str19.replaceAll("World", "JavaScript")); // Output: "Hello JavaScript. Welcome to the JavaScript!"

// 20. String split()
let str20 = "Hello,World,JavaScript";
console.log(str20.split(",")); // Output: ["Hello", "World", "JavaScript"]
