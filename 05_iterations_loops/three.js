// for of

//["", "", ""]
//[{}, {}, {}]

 let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
} //no increment needed that's why it is commonly used by developers.

//for-of on string:
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === " ") {
        continue
    } //using continue keyword to skip printing " " (space)
    console.log(`Each char is ${greet}`);
}


// Maps:-
//In JS Maps is also a datatype object.
//The Map object holds key-value pairs & remembers the original insertion order of the keys, Any value (both objects & primitive values) may be used as either a key or a value, It has no duplicates it contains only unique key-value pairs. 
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") //this will not print because map contains only unique key-values.

console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);   
}

// for-of on Object:
const myObj = {
    game1: "Soccer",
    game2: "Cricket"
}

for (const [key, value] of myObj) {
    console.log(key, value);
} // Error-object is not iteratable in this method...
//There's other way to object iterations.