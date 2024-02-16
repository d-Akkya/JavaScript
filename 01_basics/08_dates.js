// Dates

let myDate = new Date
console.log(myDate); //output is not readable

console.log(myDate.toString()); //ok it is readable
console.log(myDate.toLocaleString()); //readable
console.log(myDate.toLocaleDateString()); //indian format, readable
console.log(myDate.toDateString()); //readable
console.log(myDate.toISOString()); //not readable
console.log(myDate.toJSON()); // not readable
console.log(myDate.toTimeString()); //only time from today's date, readable
console.log(myDate.toLocaleTimeString("en-IN")); // time in indian format, readable