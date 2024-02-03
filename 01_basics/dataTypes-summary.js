//Two types of datatypes are made on the basis of - method to store the data into memory and access it. The main difference in the datatypes is 'CALL BY VALUE' & 'CALL BY REFERENCE'.

//   1)   Primitive 
// 7 types : String, Number, BigInt, Boolean, Null, Undefined, Symbol

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') //these two has two different return type
console.log(id === anotherId); // false

const bigNumber = 123456n //bigInt


//  2)    Reference (Non primitive)
// Array, Objects, Functions

const heros = ["Ironman", "Spiderman", "Thor"]; //Array

//  {
//     name: "Akkya",
//     age: 22,
// } //Object 
let myObj = {
    name: "Akkya",
    age: 22, 
} //object stored in variable

const myFunction = function() {
    console.log("Hello World");
} //function stored in variable.

console.log(typeof (anotherId));

//To study more typeof operator visit - https://262.ecma-international.org/5.1/#sec-11.4.3


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let Akkya = "Trader";

let Akhilesh = Akkya;
console.log(Akhilesh);

Akhilesh = "Investor";
console.log(Akkya);
console.log(Akhilesh);
//Stack

let userOne = {
    email: "akkya@gmail.com",
    upi: "akkya@ybl"
} 

let userTwo = userOne;

userTwo.email = "user@google.com";

console.log(userOne.email);
console.log(userTwo.email);
//Heap (reference of value)
