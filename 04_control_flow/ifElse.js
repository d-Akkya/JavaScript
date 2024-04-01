// control flow/logic flow (There's no point to run all the code everytime, that's why code need to run on condition basis like- if Login some of code will run & if Logout another code will run) 

const temperature = 37

/*
if (temperature < 40) {
    console.log("Less than 40");
}
console.log("Temperature is greater than 40");
// Here all code will run, because the code on line no.10 is not related to 'if' statement boudaries
*/

//To check correct answers we have another keyword 'else' :-
if (temperature === 37) {
    console.log("Less than 40");
} else {
    console.log('Temperature is greater than 40');
} //Less than 40
//The difference in using & not using 'else' statement, it is conditional code means either 'if' will run or 'else' will run, but not both will run.
console.log("Execute"); //this will obviously run because it's not belongs to any block. 

/*
Let's revise basic comparison operators:
<, >, <=, >=, ==, !=, ===, !== (=== & !== strict check)
'=' is used to assign values.
*/

//Let's revise scopes:
const score = 200

if (score > 100) {
    let power = 'fly' //if we used 'var' while declaring variable, it's totally global scope and can accessed the values of variable outside the block scope. 
    console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); //Error (power is undefined) - because power variable is declared in block scope & we can't access it in global scope.


//Short-hand notation of 'if' statement:
const balance = 1000

if (balance > 500) console.log("Short-hand notation"); //In this statement scope is Implicit & it's execute for only one line. 
//if (balance > 500) console.log("test"), console.log("test2"); //There is way we can add other lines also by adding ',' but that will be immature/unreadable code. 

// Nesting :-
const currentBalance = 1500

if (currentBalance < 500) {
    console.log("Less than 500");
} else if (currentBalance < 1000) {
        console.log("Less than 1000");
} else if (currentBalance < 1200) {
    console.log("Balance is less than 1200");
} else {
    console.log("Greater than 1200");
} //this is basic if-else statement used to check multiple conditions

//Realtime example of Nesting: (Buying course)
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
} //used '&&' it is double And it work to check multiple conditions at a time, if one of the condition is false then 'if' statement will not execute.

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in');
} //In this statement we used '|' 'pipe sign' it works to test multiple conditions, it is like 'or', if one of the condition from the given condition is true 'if' statement will execute.
// It is used in conditional-rendering in React.
