// forEach loop :-
const coding = ["js", "ruby", "java", "python", "cpp"]
//forEach loop is directly added to properties of array. It id a higher order function.

coding.forEach( function (item) {
    console.log(item)
} ) //we simply declared a function without name, because it is callback function.

coding.forEach( (i) => {
    console.log(i)
} ) //anpther variation by arrow fn

const greet = function (index) {
    console.log(index);
}
coding.forEach(greet) //another variation by injecting/reference of fn.
//Remember giving a reference of function not executing (), printing job will done automatically.


