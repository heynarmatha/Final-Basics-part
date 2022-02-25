//**********let & const ------ block scope

//**********var----------------global scope


//**********let keyword

let x = 10;
if (x == 10) {
    let x = 20;
    console.log(x); // 20:  reference x inside the block
}
console.log(x); // 10: reference at the begining of the script


//**********let and var global object

var a = 10;
console.log(window.a); // 10


let b = 20;
console.log(window.b); // undefined


//**********var callback function

for (var i = 0; i < 5; i++) {
    function number(i){
        setTimeout(function result() {
            console.log(i);
        }, i*1000);
    }
    number(i);
}

//output

//0
//1
//2
//3
//4

// **********let and callback function in a for loop

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}

//output

//0
//1
//2
//3
//4

// ***************Redeclaration

// 1....The var keyword allows you to redeclare a variable without any issue:

var counter = 0;
var counter;
console.log(counter); // 0

// 2.... a variable using the let keyword will result in an error:

let counter = 0;
let counter;
console.log(counter);

//error

// Uncaught SyntaxError: Identifier 'counter' has already been declared

// ****************Temporal death zone (TDZ)******************************

let log = function () {
    console.log(message); // message declared later
};
let message= 'Hello'; 
log(); 


// TDZ starts

console.log(typeof myVar); // undefined
console.log(typeof message); // ReferenceError
let message; // TDZ ends
var myVar;

// ****************************Variable scopes

//---------------------------var ----------------------

for (var i = 0; i < 5; i++) {
	console.log("Inside:", i);
}

console.log("Outside:", i);

//output
// Inside: 0 
// Inside: 1 
// Inside: 2 
// Inside: 3 
// Inside: 4 
// Outside: 5

//---------------------------let----------------------

for (let i = 0; i < 5; i++) {
	console.log("Inside:", i);
}

console.log("Outside:", i); //   Uncaught ReferenceError: i is not defined

//output

// Inside: 0
// Inside: 1
// Inside: 2
// Inside: 3
// Inside: 4

