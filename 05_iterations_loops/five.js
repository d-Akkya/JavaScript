// for-each loop :-
const coding = ["js", "ruby", "java", "python", "cpp"]

coding.forEach( function (item) {
    console.log(item)
} ) //we simply declared a function without name, because it is callback function.

coding.forEach( (i) => {
    console.log(i)
} )

const greet = function (index) {
    console.log(index);
}
coding.forEach(greet)