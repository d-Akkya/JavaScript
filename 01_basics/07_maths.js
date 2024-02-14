console.log(Math);

console.log(Math.abs(-5)); // it gives the absolute value converts only -(negative) value to positive => 5

console.log(Math.round(4.3)); //it returns only roundoff values in a regular way => 4
console.log(Math.round(4.6)); //=> 5

console.log(Math.ceil(4.2)); // it returns only top roundoff value if there is any number after the decimal => 5
console.log(Math.floor(4.9)); // it returns only less roundoff value no matter of number after the decimal => 4

console.log(Math.min(4, 2, 7, 5)); // it will return the minimum value from the given array => 2
console.log(Math.max(4, 2, 7, 5)); // it will return the maximum value from the given array => 7

//The most Math library is used for:
console.log(Math.random()); // it will return random values between 0 to 1
console.log(Math.random() * 10); //multiplied by 10 will shift one decimal digit to left
//but the value generated is 0.04 * 10 = 0.4 then, 
console.log(Math.random() + 1); // giving +1 prevents the return output will not in 0

// We can wrap the function into function for roundoff values
console.log(Math.floor(Math.random() * 10) + 1); // here floor will get lowest value

//Let's declare a range for random function
const min = 10
const max = 20
//for getting random value between 10 to 20 will use the formula:
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //this formula will print any random vakue between 10-20