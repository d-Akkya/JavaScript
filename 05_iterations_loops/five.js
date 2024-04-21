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

//forEach have more access rather than only 'value' parameter like 'index', 'array': (value, index, array)
coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
} )
//Actually we didn't need of whole array, but it has the access of whole array.


//The common scenario of using forEach: [{}, {}, {}]
const myCoding = [
    {
        languageName: "javascript",
        fileExtension: "js"
    }, 
    {
        languageName: "python",
        fileExtension: "py"
    }, 
    {
        languageName: "java",
        fileExtension: "java"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} ) //here we named every object in the array as 'item' and accessed it with the .languageName
//this is common operation because data will come in array containing objects from database.
