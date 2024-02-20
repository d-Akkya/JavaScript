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

console.log(typeof myDate); //so we created object of date, then typeof will be => object.

// Not only this we can create a specific date:
let myCreatedDate = new Date(2024, 1, 16) // month index starts from 0 in this array input like 0 = Jan
console.log(myCreatedDate.toDateString());
// we can add time in front of date
myCreatedDate = new Date(2024, 1, 16, 17, 33)
console.log(myCreatedDate.toLocaleString());

//There's another method to declare a specified date:
myCreatedDate = new Date("2024-01-16") //yyyy-mm-dd format, no month index from 0
console.log(myCreatedDate.toLocaleDateString());

myCreatedDate = new Date("02-16-2023") //mm-dd-yyyy format
console.log(myCreatedDate.toLocaleDateString())
// to get time of this created date:
console.log(myCreatedDate.getTime()); // values are in miliseconds 
//I think dd-mm-yy format is not supported

//Timestamp - it hepls in quiz and polls to find out who answered fast and first
let myTimeStamp = Date.now()
console.log(myTimeStamp) // the values are in mili-seconds
// to convert miliseconds to second:
console.log(myTimeStamp / 1000); //but sometimes it gives values in decimals so we can simply use functions of 'Math' floor or round
console.log(Math.floor(myTimeStamp / 1000)); // it easy to compare in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay()); //if we only perticular day
console.log(newDate.getMonth() + 1); //ok month index is at 0 so to show the user add +1

//sometimes the developer showing the values by interpolation for ex. `${newDate.getDay()} and the time is ${newDate.toLocaleTimeString()}
// we are using most:
console.log(newDate.toLocaleString('default'/*internationalisation*/, {
    weekday: "long" //use 'ctrl+space' for suggestions in vs code.
})); //we declare object and values in LocaleString function it heplful for customisaton.


