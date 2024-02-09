let name = "Akkya"
const repoCount = 5;

/*
console.log(name + repoCount + " Value");
console.log(name, repoCount, "Value"); //these two syntax are outdated.
*/

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //this is readable & modern way to declare string using `backticks` known as String Interpolation which means we create placeholders so we can easily inject variables in String.

//There is other way to declare a string:
const gameName = new String("Akkya");

console.log(gameName[0]); //Accessing key-value-pair
console.log(gameName.__proto__); //Accessing prototype => String

console.log(gameName.length); //length method

console.log(gameName.toUpperCase()); //used function toUpperCase

console.log(gameName.charAt(3)); //used to findout character at the given index
console.log(gameName.indexOf('y')); //used to findout index of given character