// variables can be re declared and updated by using var keyword
// mostly not prefered
var age=24;
var age=30;
var age=50;

// variables can be updated and not reinitialized using let keyword
// variables can be declared and later be intialized

let age=39;
age=40;      // updating the age to 40
let age=49;  // gives error

// variables cannot be re-intitialized and updated (they are made constatnt)

const age=40;
// always while defining a variable as constant it should also be intialized
age=47;  // gives error
const age=90;  //gives error
