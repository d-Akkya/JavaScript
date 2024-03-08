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


// Nested Scope :-
function one() {
    const username = "akkya"

    function two() {
        let website = "LinkedIn"
        console.log(username);
    }
    // console.log(website); //error, because of we can't access the child function variables/values in parent function.

    two() // called the child function in parent class
}
one()
//The main rule in scopes or closure is the child function can access the parent fuction's values, but the parent function can't access the child function's values.
//Not only functions in function, but also function in if-else & loops:
if (true) {
    const username = "akkya"
    if (username === "akkya") {
        const website = "LinkedIn"
        console.log(username, website);
    }
    // console.log(website); //errr , because of main rule
}
// console.log(username);





// ++++++++++++++++++++++++++++ Interesting examples/techniques ++++++++++++++++++++++++++
console.log(addOne(5)); //here we executed the function before declaration, but there is no problem in this method & no error will thrown => 6
function addOne(num) {
    return num + 1
  } //It is a basic declare of function

//another technique
addTwo(5) //here we executed the function before declaration, but in this technique it will show an errer because we declared & holding the values of function in variable.
  let addTwo = function (num) {
    return num + 2
  } //In this technique we declared and storing the values of function in variable which is also called expression.
  // So the function declaration technique is important further hoisting concept.
  // Variables are very powerful in js they can store anything like json values, functions, etc.
