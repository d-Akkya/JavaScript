// for

for (let i = 0; i <= 10; i++) {
    const element = i
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
}   //rule first we initialize variable, second condition if it's true (eg. if) then loop is executed till the second-last line of the scope of loop and returns to the third stage i.e i++ till the second condition satisfies. 

//Let's use loop under loop:
for (let i = 0; i <= 10; i++) //we can use 'i' as variable because previously used 'i' is limited for that respective loop (block scope scope)
{
    console.log(`Outer loop value: ${i}`);
    for (let j = 0; j <= 10; j++) //here we can't use variable as 'i' because this loop is under a loop, so it creates a mismatch problem.
    {
        console.log(`Inner loop value: ${j}`);
        
    }
    
}