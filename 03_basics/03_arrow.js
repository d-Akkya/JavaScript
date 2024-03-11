//This arrow function feature is introduced in es6 in 2015.


//this keyword refers the current context.
const user = {
    username: "akkya",
    regFee: 599,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`); //this keyword will access the values of current object for function
        // console.log(this);
    }
}
user.welcomeMessage()
user.username = "Prasad"
user.welcomeMessage()
console.log(this); //{} empty object
/* Important Note:-
But when we, console.log(this) in browser global scope we get the output: Window {} (Window object), because in early times there is one way to execute js i.e browser, the engines which executes js is in browser. But now the Engines are created and named it node, deno, bun, etc. so, now engines are standalone.
When Engine runs in browser, the most global object is 'Window object'. so we can catch all the browser events like click, formsubmit, etc. further in DOM.
*/

const akkya = function() {
    let username = "Akhilesh"
    console.log(this); //it is giving a lots of values which we can use
}
akkya() //'this' keyword only works for object -> undefined

//declaring Arrow Function:
const arrow = () => {
    let username = "akhilesh"
    console.log(this.username); //undefined
    console.log(this); //{} (empty object)
}
arrow() //So in arrow function we can't use 'this' keyword

// Basic Syntax: () => {}

//We can hold it in variable
let twoNum = (num1, num2) => {
    return num1 + num2
}
console.log(twoNum(2, 5)); //It Explicit Return Method, if we use curly braces {} then we need to write 'return' keyword compulsory in code to return values of function.

//Implicit return-
const addTwo = (num1, num2) => num1 + num2
console.log(addTwo(5, 2)); 
//In this method we don't need to 'return' keyword in code, it will automatically consider to return the values are in the same line & we don't need to use {}
//If you this is confusing, we can use () paranthesis to return values:
const addNum = (num1, num2) => (num1 + num2) 
console.log(addNum(3, 5));
// This technique is used the most in React. Now, if we want to return an object in this technique-
//if we didn't use () paranthesis while returning object it will print 'undefined'
const obj = () => ({username: "akkya"})
console.log(obj()); 
//Remeber the declaration technique of arrow function because didn't using () will not execute your code or face some errors
/*
It's used in loops -
cosnt myArr = [1, 2, 3, 4, 5]
myArr.forEach(() => ())
*/