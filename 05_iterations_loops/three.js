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
    console.log(`Each char is $`);
}