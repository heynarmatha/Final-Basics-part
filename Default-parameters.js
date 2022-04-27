// JavaScript Default Parameters

// assignment operator (=) and the default value after the parameter name to set a default value for that parameter

function message(message = "Hi") {
  console.log(message);
}

message(); // 'Hi'
message(undefined); // 'Hi'
message("Hello"); // 'Hello'

// ***************************************************************

function noMsg(message) {
  console.log(message);
}

noMsg(); // undefined

// ***************************************************************

function messageTernary(message) {
  message = typeof message !== "undefined" ? message : "Hi";
  console.log(message);
}
messageTernary(); // 'Hi'

// ***************************************************************

function add(a, b) {
  return a + b;
}

let sum = add;

function average(a, b, sum) {
  return sum(a, b) / 2;
}

let result = average(10, 20, sum);

console.log(result); // 15
