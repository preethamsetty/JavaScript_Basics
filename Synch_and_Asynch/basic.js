//Synchronous

function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2');
}

function f3(){
    console.log('f3');
}

f2();
f1();
f3();

//output:    
//f2
//f1
//f3

//-----------------------------------------------------------

//Asynchronous with browser API
function f1(){
    console.log('f1');
}
function test(){
    console.log('test');
}
setTimeout(f1,2000);
test();

//output:
//test
//f1
//---------------------------------------------------------------

//Asynchronous with both promises and browser API
function f1(){
    console.log('f1');
}
function f2(){
    console.log('f2');
}
function main(){
    console.log('main');
    setTimeout(f1,0);
    new Promise(function(resolve,reject){
        resolve('I am a promise');
    }).then(resolve=>console.log(resolve));
    f2();
}
main();

//output:
//main
//f2
//I am a promise
//f1
//------------------------------------------------------------------------------