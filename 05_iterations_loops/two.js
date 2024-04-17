// while loop:
//while loop is easy & same as 'if' statement because syntax. There is difference between for & while loop because of syntax (condition intialization & increment)
let index = 0;
while (index <= 10) {
    console.log(index);
    index = index + 2  //increment is done inside the scope, we can also use index++
}


// while-loop on array:
let myArray = ["Batman", "Superman", "Flash"]
let arr = 0

while (arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


//do-while loop: (उधारी सिस्टम)
let gameScore = 11
do {
    console.log(`Score is ${gameScore}`);
    gameScore++
} while (gameScore <= 10);  //11
//In do-while loop, first the task is done then it checks the condition in the end.
//It is rarely used, in common we first check condition & then control the flow.

//There are 1000's of ways to generate a required output, so weither use for, while, do-while loop, map, etc. At the end the output should be generated.