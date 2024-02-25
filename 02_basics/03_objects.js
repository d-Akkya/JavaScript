//singleton: it is the method to create object with constructor & that object will be only one unique object.
//object.create (constructor method)

//objects literals:-
let mySym = Symbol("key1")

const JsUser = {
    name: "Akkya", //it automatically understand that key declared name is string
    "full name": "Akhilesh Bamane", //can't be accessed by '.' method
    age: 20,
    email: "akkya@xyz.com",
    location: "Miraj",
    isLoggedIn: false,
    lastLoginDay: ['Monday', 'Saturday'], //in object we can assign mutliple elments.
    [mySym]: "mykey1" //if interviewer asked to declare and print symbol in object, this is the syntax
}

console.log(JsUser.email);
console.log(JsUser['email']); //another way to access the key from object
console.log(JsUser['full name']);
console.log(JsUser['lastLoginDay'][0])
console.log(JsUser[mySym]);
console.log(JsUser);

JsUser['email'] = 'akkya@chatgpt.com' //changing the value of key email

//if we didn't want to change the object values we can freeze it:
/* Object.freeze(JsUser) //now we can not change the values of object JsUser */
//Let's try it with example
JsUser.email = 'akkya@google.com'
console.log(JsUser['email']); // after freezing the object, we can define the change of value it not return error, but change in values will not propogate => akkya@chatgpt.com

//Let's assign function in object:
//In JS function is treated like variable, because there is no discrimination in function.
JsUser.greeting = function() {
    console.log('Hello JS user');
}
console.log(JsUser.greeting); //in this method function is not executed, only it returned the reference of function 
console.log(JsUser.greeting()); //function is executed => 'Hello JS User'

// Let's create another function that will reference of values:
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`) //this. keyword is used to take the reference of values which belongs to same object. After this. variable / key name
}
console.log(JsUser.greetingTwo());

// Note: In last we access all the object values by '.' method, but in some situation we need to use [] like symbol, key - "Roll No": 23, ect.