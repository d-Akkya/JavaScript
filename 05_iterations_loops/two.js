// while loop
let index = 0;
while (index <= 10) {
    console.log(index);
    index = index + 2
}


// while-loop on array:
let myArray = ["Batman", "Superman", "Flash"]
let arr = 0

while (arr < myArray.length){
    console.log(`Value is ${myArray[arr]}`);
    arr = arr + 1
}


//do-while loop:
let gameScore = 1
do {
    console.log(`Score is ${gameScore}`);
    gameScore++
} while (gameScore <= 10);
//In do-while loop first the task is done then it checks the condition in last.
