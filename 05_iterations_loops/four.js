// for-in loop :-
const myObject = {
    js: "javascript",
    rb: "ruby",
    cpp: "C++",
    py: "python"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)
}


// for-in on array:
const programming = ['js', "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(key); //but it's printing only keys of array in this loop, as we see the for-of loop gives the values of array. Yes it is the major syntax difference between for-of & for-in loop.
    console.log(programming[key]);  
}
//Array also have keys by default numbers starts with 0, but in object we can add keys whatever we want.


// for-in loop on Map:
const map = new Map()