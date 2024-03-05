// Scopes:-
// In simple words {} is scope except Object

// var c = 400
let a = 300

if (true) {
    let a = 10
    const b = 20
    c = 30 // not only var, but variable without any keyword will also give same problem
    console.log("Inner: ", a);
}

console.log(a); //if not declared in global scope but declared in block scope and print the value in global scope then it will show error 'undefined'.
// console.log(b); //error
console.log(c); //30 (further will face issues)

// There's difference between windows (browser) global scope & node (code run through node) global scope.