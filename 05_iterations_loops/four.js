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