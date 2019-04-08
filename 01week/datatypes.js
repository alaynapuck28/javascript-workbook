'use strict'
console.log("hello!");

//Date and time

var date = new Date();
console.log(date.toLocaleString("en-us"));
//display date and time in DOM
function dateAndTime() {
  document.getElementById("datetime").innerHTML = date;
}

let num = 15;
let n = num.toString();
console.log(n);

function numberToString() {
  document.getElementById("numtostring").innerHTML = n;
}

let eight = Number("8");
console.log(eight);

let Alayna = "Alayna";
console.log(typeof Alayna);
// expected output: "string"

console.log(typeof 38.75);
// expected output: "number"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof x);
// expected output: "undefined";

console.log(parseInt("Plan 9"));
//expected output: NaN

//add two numbers together
var firstNumber = 9;
var secondNumber = 3;
console.log(firstNumber + secondNumber);

//program to add numbers together from DOM input
function add() {
    var y = document.getElementById("valuea").value;
    var z = document.getElementById("valueb").value;
    y = parseInt(y,10);
    z = parseInt(z,10);
    var x = y + z;
    document.getElementById("newnum").innerHTML = x;
  }

//only runs when 2 things are true
if (firstNumber > 6 && secondNumber > 2) {
  console.log("true");
}

//runs when 1 of 2 things are true.
if (firstNumber > 5 || secondNumber > 5) {
  console.log("true");
}

//runs when both things are not true
if (firstNumber !== 6 && secondNumber !== 2) {
  console.log("false");
}


