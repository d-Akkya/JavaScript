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
    if(!username /*(username === undefined) here we check the values, if the values is true then statement goes further*/){
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

const user = {
    username: "Akkya",
    email: "akkya@007"
}

function handleObject(anyObjects){
    console.log(`My name is ${anyObjects.username} and my email id is ${anyObjects['email']}`);
}
// handleObject(user) //=> My name is Akkya and my email id is akkya@007
// we can create an object while executing the function
handleObject({
    username: "Akhilesh",
    email: "akhilesh@gmail.com"
})

const myArray = [200, 500, 600, 900]

function handleArray(getArray) {
    return getArray[1]
}
// console.log(handleArray(myArray)); //=> 500
console.log(handleArray([1, 2, 3, 4, 5]));


