
var x = 1;
console.log(x);
function a(){
    x=10;
    console.log(x);
}

a();

// 1
// 10

let x = 10;
console.log(x);
function a(){
    x=100;
    console.log(x);
}
a();
x=1000;

// 10
// 100

const x = 100;
console.log(x);
function a(){
    x=10;
    console.log(x);
}
a();

// error assingment to const var 

function a(){
    console.log(x);
}
a();
var x=2   

// undefined

let x;
function b(){
    console.log(x);
}
b();
x=2;

// undefined 

function a(){
    console.log(x);
}
a();
let x=2 

// error can't access x before initialization 


var a=1;
let b=2;
{
    var a = 10;
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log(b);

// app.js:68 10
// app.js:69 20
// app.js:70 30
// app.js:73 2
 

 function x(){
     var a =7;
     function y(){
         console.log(a);
     }
     return y;
 }
 var z =  x();
 console.log(z);
 z();

//  app.js:89 ƒ y(){
//     console.log(a);
// }
// app.js:84 7


function x(){
    for(var i=0;i<6;i++){
        setTimeout(()=>{
            console.log(i);
        },1000*i)
    }
}
x();

// 6
// (5)6

function x(){
    for(var i=0;i<6;i++){
        function close(i){
                setTimeout(function(){
                    console.log(i);
                },1000*i)
        }   
        close(i);
        console.log("interview");
    }
}
x();

// (6)interview
// 0
// 1
// 2
// 3
// 4
// 5

const person = {
    name:"nagarro",
    age:100,
    isAutherised: false,
    isUnicorn:true,
    bestDomain:"analytics"
}

let copy = person;
copy.name = "sameer";
copy.age = 20;
copy.isAutherised=true;
copy.isUnicorn=false;
copy.bestDomain="sleeping";
for(i in copy){
    console.log(i+" : "+copy[i]);
}

// app.js:146 name : sameer
// app.js:146 age : 20
// app.js:146 isAutherised : true
// app.js:146 isUnicorn : false
// app.js:146 bestDomain : sleeping
// question1: make copy of the object and manipulate values inthe new copied object
// question2: print all the properties using appropriate for loop 





// theory questions you should also prepare
// 1. what is GEC (global execution context)? -- mcp and cep
// 2. single threaded meaning? 
// 3. what is hoisting?
// 4. call back queue
// 5. let and const hoisted hote hai?? and kahan hote hai? (dead temporal zone mei hote hai) -->  read about dead temporal zone
// 6. block scope and global scope
// 7. closure?
// 8. event loop
// 9. asynchronous 
// 10. for each loop


