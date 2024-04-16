// for

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        //console.log("5 is best number");
    }
    //console.log(element);
}   //rule first we initialize variable, second condition if it's true (eg. if) then loop is executed till the second-last line of the scope of loop and returns to the third stage i.e i++ till the second condition satisfies. 


//Let's use loop under loop:
for (let i = 1; i <= 10; i++) //we can use 'i' as variable because previously used 'i' is limited for that respective loop (block scope scope)
{
    //console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) //here we can't use variable as 'i' because this loop is under a loop, so it creates a mismatch problem.
    {
        // console.log(`Inner loop value: ${j} and outer loop is ${i}`);
        //console.log(`${i} * ${j} = ${i*j}`);                
    }    
}


//Basic syntax of for-loop is on array:
const myArray = ["Batman", "Superman", "Flash"]
console.log(myArray.length); //3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
} //if we use 'index <= array.length' in js there's no exception bound problem, but the extra value is printed 'undefined'
//in case you didn't use the '++' means instead of 'index++' you use only 'index' the loop not change the values & stuck into first value/go to infinity and may consume more storage.


// break & continue:
//Sometimes we get 1000's of data from database, but we need to print 4-5 data from them, so everytime it's not important that the loop will rustart & will run till the end, sometimes some condition comes in between the loop and we need to end the loop on that condition basis.
//for that 'break' & 'continue' keywords are used.

for (let index = 0; index <=20; index++) {
    
}