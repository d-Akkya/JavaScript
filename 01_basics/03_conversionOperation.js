/*
let score = "Akkya";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
*/

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// string => NaN
// undefined => NaN
// null => 0


/*
let isLoggedIn = "Akkya";
let booleanValue = Boolean(isLoggedIn);
console.log(booleanValue);
*/

// 1 => true; 0 => false
// "" => false
// "Akkya" => true

/* 
let stringNumber = 33;
let stringValue = String(stringNumber)
console.log(stringValue);
console.log(typeof (stringValue));
*/

// ******************* Operations ***********************

/* let value = 3;
let negValue = -value;
console.log(negValue);
*/ 

 /* console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/2);
console.log(2%3); */

let str1 = "Hello";
let str2 = " Akkya";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2);
console.log(1 + '2');
console.log(1 + 2 + "2");
console.log(1 + "3" + 2);

console.log( (3 + 4) * 5 % 3); // code readability is very important while programming because pull request will not merge.
//use () paranthesis for this type of values.

console.log(+true); //boolean converted to number by increment & true+ => error
console.log(+""); //+"" => 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
++gameCounter; //++prefix & postfix++ Operator
console.log(gameCounter);
// search prefix and postfix js mdn for better understanding.

/*
link to study ecma script more important
https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
*/
