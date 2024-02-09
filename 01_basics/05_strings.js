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

const newString = gameName.substring(0, 2); //We need to define the start index & end index but the end index is not included in the generated substring
console.log(newString); // -values can declared but it doesn't obey and start with 0index

const anotherString = gameName.slice(-2, 5); //Same as substring but we can use -values in slice function, it starts from reverse indexing.
console.log(anotherString); //=>ya
console.log(gameName.slice(0, 3)); //=>Ak

const newStringOne = "   Akkya   "; //this string contains starting space & ending spaces.
console.log(newStringOne); //=>'    Akkya   '
console.log(newStringOne.trim()); //removes the starting spaces & ending spaces =>Akkya
//visit 'trim javascript mdn' for more knowledge about trim function or method like syntax, start, end, etc.

const url = "https://dakkya.com/d%20akkya" //%20 is space in browser url
console.log(url.replace('%20', '-')); //replaced the value of '%20' with '-'

//we can also search weither the string contains the following value or not by:
console.log(url.includes('akkya')); //we can ask from it => true
console.log(url.includes('Rahul')); //=>false

//We can convert or split the given string into array by given values like "-", " ", etc.
let seperateTheString = "d-akkya-007";
console.log(seperateTheString.split('-'));
//visit mdn for documentation of split.

/* 
Note : Visit mdn doc for all remaining functions of strings. Being familiar to String and it's functions is very helpful for backend as well as frontend. So, go through all the methods of String.
Use the modern way to declare a String not the outdated one.
*/
