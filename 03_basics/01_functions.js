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

//Let's create another functions to add two numbers:
function addTwoNumbers(number1, number2 /*parameters*/) {
    console.log(number1 + number2)
}
// addTwoNumbers() //need to pass arguments
addTwoNumbers(2, 5 /*arguments*/) //7
//not only this we can store the function in variable
const result = addTwoNumbers(5, 5)
