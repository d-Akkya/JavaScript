const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//complete value 'return' task from forEach:
// const akkya = []
// myNumbers.forEach( (num) => {
//     let add = num + 10
//     akkya.push(add)
// } )
// console.log(akkya);

//map method:-
// const newNums = myNumbers.map( function (num) {return num + 10} )
//we can add conditions in map but it will petrate all values unlike filter whenever the condition value is true it will return those valuesm, map is different.

//chaining:
const newNums = myNumbers
                .map( (num) => num*10 )
                .map((num) => num + 1)
console.log(newNums);