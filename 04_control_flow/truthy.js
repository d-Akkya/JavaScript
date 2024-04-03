//truthy & falsy values

const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have a user email");
} //having value is true, but what when the values are empty like [] - it is also true
//there are some rules

/*
falsy values:-
false, 0, -0, BigInt 0n, "", null, undefined, NaN
//rather than these values are all true.

truthy values:- (surprising)
"0", 'false', " ", [], {}, function(){}
//except above falsy value all the values are true.
//all the values come in "String" it will true. And empty non-primitive data type is also true.
*/

// Now, how we can find out the given value is empty array [] :
if (userEmail.length === 0) {
    console.log("Array is empty");
}

// And, how we can find out the given value are empty object {} :
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}


// Nullish Coalescing Operator (??): null, undefined
let val1;
// val1 = 5 ?? 10  //10
//This operator is invented for when we create functions and methods to call values from database. The database not respond directly sometimes it will null and value, no respond (undefined) and value to assign and adjust the code structure.

// val1 = null ?? 10   //10
// val1 = undefined ?? 15   //15

// Interesting case:
val1 = null ?? 10 ?? 15   // 15 (the first value get's printed)
console.log(val1);


//Terniary operator:
// condition ? true : false     //basic syntax
const starbucksCoffee = 100

starbucksCoffee <= 80 ? console.log("Less than 80") : console.log("More than 80")