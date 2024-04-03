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
*/