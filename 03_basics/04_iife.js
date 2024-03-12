// Immediately Invoked Function Expressions (IIFE)

function test() {
    console.log("Test is just a normal function");
}
test(); //This function is also immediately invoked but sometimes it gets polluted by global scope.

// For that we use IIFE:-
( function akkya() {
    //named iife
    console.log("DB CONNECTED");
}); //We simple wrapped a function in () paranthesis

// Imp Note:- Remember if we want to declare two or more iife we need to declare the 'and' to end line of first iife function by explicitly putting ';'. This is because iife is invoked but ot didn't know where to stop the context i.e sometimes it shows error.  

// IIFE by arrow function:
( (name) => {
    //simple iife (unnamed)
    console.log(`DB CONNECTED TWO ${name}`);
} ) ("akkya"); 


(function akkya(num) {
    console.log(num);
}) (5)