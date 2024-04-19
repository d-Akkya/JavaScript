// for of

//["", "", ""]
//[{}, {}, {}]

 let arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

//for-of on string:
const greetings = "Hello world!"
for (const greet of greetings) {
    if (greet === " ") {
        continue
    } //using continue keyword to skip printing " " (space)
    console.log(`Each char is ${greet}`);
}


// Maps:-
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);