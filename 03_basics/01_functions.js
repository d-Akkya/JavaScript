//function means a block of code whatever it be of 5, 10, or more lines of code in package, so whenever we need the package we can use easily.
function sayMyName() { //scope
console.log('A');
console.log('K');
console.log('K');
console.log('Y');
console.log('A');
}
sayMyName // function reference, it very important in dim manipulation
// sayMyName() //function execution

// //Let's create another functions to add two numbers:
// function addTwoNumbers(number1, number2 /*parameters*/) {
//     console.log(number1 + number2)
// }
// // addTwoNumbers() //need to pass arguments
// addTwoNumbers(2, 5 /*arguments*/) //7
// //not only this we can store the function in variable
// const result = addTwoNumbers(5, 5)
// console.log(result); //result is undefined this is because console will only print values but didn't return it from function.

function addTwoNumbers(number1, number2) {
    /* let result = number1 + number2 //this result variable is different because it is in the function.
    console.log("Akkya"); //this code is executed because it is before return.
    return result // return keyword is used to return the value from function
    // console.log("Akkya"); //this code will not execute because of by default rule of function is 'any code after the return will not executed'
    */
   // Instead of declaring variable there is another method:
   return number1 + number2 //directly returned the value of operation
}
const result = addTwoNumbers(2 , 7) //now this result variable is different because of scopes
console.log(result); //9

//Now we use if statement:
function userLoginMessage(username) {
    if(!username /*(username === undefined) here we check the values, if the values is true then statement goes further*/) {
        console.log("Please enter a username");
        return //if this return hits the further code will be not executable
    }
    return `${username} just logged in`
}
userLoginMessage("Akkya") //but here nothing is coming on screen, it is because we didn't print anything
// console.log(userLoginMessage("Akkya")); //=> Akkya just logged in
console.log(userLoginMessage("")); 
 
//! is not symbol, it converts true to false & false to true
//as we know "" is false and undefined is also false, so if userLoginMessage("") or userLoginMessage() then username is false
// !username = true

//If we want to avoid userLoginMessage() this type of situation we can add default values:
function userLoginName(username = "Sam" /* now we declared default value as Sam, if anyone didn't pass value it will automatically print sam and not goes to if statement */) {
    return username
}
console.log(userLoginName());



//More parameters or operators passed in functions:-
// Give the name for functions that can easily understand by anyone what actually function is doing. 
// In future we will work project like online shopping website or app, in that project user will add multiple items to cart and the cart must show the total price of cart. In this situation we don't know how many arguments will be passed, so therefore we need to create that kind of parameters. Rest operator (...)
/*
function calculateCartPrice(num1) {
    return num1
}
console.log(calculateCartPrice(200, 400, 550)); //now here the arguments are 3 and parameter is only one => 200
*/
//Now we can use rest operator:
function calculateCartPrice(val1, val2, ...num1) {
    return num1
}
console.log(calculateCartPrice(200, 300, 400, 500, 600)); //we get every argument passed in array
// (...) works as rest & spread operator depends on the usecase situation.



// Functions with objects:
const user = {
    username: "Akkya",
    email: "akkya@007"
}

function handleObject(anyObject){
    console.log(`My name is ${anyObject.username} and my email id is ${anyObject['email']}`);
}
// handleObject(user) //=> My name is Akkya and my email id is akkya@007
// we can create an object while executing the function
handleObject({
    username: "Akhilesh",
    email: "akhilesh@gmail.com"
})

// Let's pass the array in function:
const myArray = [200, 500, 600, 900]

function arraySecondValue(getArray) {
    return getArray[1]
}
// console.log(arraySecondValue(myArray)); //=> 500
console.log(arraySecondValue([1, 2, 3, 4, 5])); // same as objects we can create an array while passing the argument or executing the function => 2


