//promise.prototype.finally

fetchData()
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log('Fetch operation finished.');
  });

  //-----------------------------------------------

  //Regex

const re = /hello.world/s;
console.log(re.test('hello\nworld')); // true

//--------------------------------------------------

// ^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$   (email validation)

//-------------------------------------------------------------------
let str = "Hello World";
let regex = /World/;
console.log(regex.test(str)); // Output: true

//-------------------------------------------------------------------

//Case Insensitive Match
let str1 = "hello world";
let regex1 = /Hello/i;
console.log(regex.test(str)); // Output: true

//---------------------------------------------------------------------------






