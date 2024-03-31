// control flow/logic flow (There's no point to run all the code everytime, that's why code need to run on condition basis like- if Login some of code will run & if Logout another code will run) 

const userLoggedIn = true
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