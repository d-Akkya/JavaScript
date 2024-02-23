let marvel_heros = ['Ironman', 'Thor', 'Spiderman']
let dc_heros = ['Batman', 'Spiderman', 'Flash']

/*  marvel_heros.push(dc_heros) */
console.log(marvel_heros); //this is not the way to merge two arrays it faces some problem like array comes into array => [ 'Ironman', 'Thor', 'Spiderman', [ 'Batman', 'Spiderman', 'Flash' ] ]
/* console.log(marvel_heros[3][1]); //the array in array will be the whole element of the parent array, so if we want to access a value from it. But it is the not right syntax. */

//Instead of we can use:
const allHeros = marvel_heros.concat(dc_heros) //we can add or merge two arrays, but one thing to remember the concat() function can't be directly performed, because it returns the new array so it needs new memory/variable.
console.log(allHeros); //there is limitation to merge one array with another array in concat()

//There's another method to merge arrays: (Spread)
// ex: Drop a glass pn floor, it will spread.
let allNewHeros = [...marvel_heros, ...dc_heros]
console.log(allNewHeros); //most of the people use spread because there's no such limitation to merge arrays.

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]] //rare situation arrays in arrays
const usableArray = anotherArray.flat(2) //depth in array to spread the arrays (Infinity is trick).
console.log(usableArray);

// let's convert the other type of data to array. It is useful while data scrapping, because we get various type of values like nodelist, objects, strings, ect.
console.log(Array.isArray('Akkya')); //we ask question to array => false
console.log(Array.from("Akkya")); //converted array from string
console.log(Array.from({name: 'Akkya'})); //interesting
//Interesting part because we need to declare that array to be made from keys or values, if we didn't declare it can't directly convert & returns empty array => []
//let's take an example on this:
const score1 = 100
let score2 = 200
const score3 = 300

console.log(Array.of(score1, score2, score3)); // in place of from() we used of()
//it will convert the following elements into array by keys => [100, 200, 300]



