const score = 500
console.log(score);

const balance = new Number(200); //this will declare a value of number it is a object
console.log(balance);

//Methods of number:
console.log(balance.toString()); //converted number to string by this method.
console.log(balance.toString().length); //as we know by length we can check the length of String.

let payment = 26;
console.log(payment.toFixed(1)); //giving the fixed precision value after decimal => 26.0
payment = 26.007;
console.log(payment.toFixed(2)); // so we passed 2 means after decimal we need digit 2 precision value to be fixed => 26.01

let otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //we can also play with precision value, in this method we can pass how many precision value we actually needed like before the decimal and after the decimal and also it converts the value into string => 23.9
otherNumber = 123.8966 // let the digits of value before decimal is 3 and we pass precision value 3
console.log(otherNumber.toPrecision(3)); //it will make roundoff of after the decimal value and gives the precision value => 124
otherNumber = 1123.89 //let the digits of value before decimal is 4 and we pass precision value 3
console.log(otherNumber.toPrecision(3)); //so it will return 3 digits as precision value and remaining as exponential value
//So be careful when using precions we need the calculation dependency like we know how many digits will there before decimal and how many digits of value we need before & after decimal like 
otherNumber = 123.8966;
console.log(otherNumber.toPrecision(4)); //we need the precision value before decimal is 3 & after decimal is 1 => 123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString()); //this will convert the value into local string by putting ',' => 1,000,000
// The result will show by default in US standard, to show result in Indian values we use "en-IN"
console.log(hundreds.toLocaleString('en-IN')); // this will return in indian format => 10,00,000
// There are many more locale formats we can visit mdn docs to learn more.


