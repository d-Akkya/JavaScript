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

if ()