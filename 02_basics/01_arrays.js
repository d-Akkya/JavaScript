// array

const myArray = [1, 3, 5, 2, 7, 'Akkya', true]
// console.log(myArray[1]);

const myHeros = ['Hanuman', 'Ch.Shivaji Maharaj', 'Ganesha']
// console.log(myHeros[1]);

const myArr2 = new Array(1, 2, 3, 4) //another way to declare an array
console.log(myArr2.length); // it also comes lenth property => 4

/* Array Methods: */
myArr2.push(5) // push method adds the passed element to the last 
console.log(myArr2);
console.log(myArr2.length); //=> 5

myArr2.pop() // pop will remove the last element, no argument needed

myArr2.unshift(9) // unshift will add the passed element to the start of array, rarely used
myArr2.shift() // shift will remove the starting element, no argument needed

console.log(myArr2.includes(9)); // we asking question to array by includes(), it is boolean type => false

console.log(myArr2.indexOf(3)); // we can check the index of following element => 2
console.log(myArr2.indexOf(19)); // but we check the index of non-existing value it return -1

const newArr = myArr2.join() // join operator converts/adds all the elements of an array into a string
console.log(newArr); // typeof - string data type

//slice, splice methods:
console.log(myArr2.slice(1, 3)); //in this method we need to declare start and end range so it will return the range elements, but end range is not included => [2, 3]
console.log(myArr2); // so here you can see the main values are not changed and not manipulated by slice() function => [1, 2, 3, 4]

myArr2.push(5) // adding 5 to the array, so the length of array is 5

console.log(myArr2.splice(1, 3)); // in this method also we need to declare start & end range, so it will return the range elements, end range is included in this method => [2, 3, 4]
console.log(myArr2); //here is main changes happens in array. The splice() function will return the passed range elements, but it manipulates the main array values & array will have the remaining elements after the function range => [1, 5] 
//Another example-
let array = [3, 6, 8, 9, 7, 5, 2]
console.log(`A: ${array}`);

const myn1 = array.slice(2, 5);
console.log(`B: ${myn1}`);

const myn2 = array.splice(1, 5)
console.log(`C: ${myn2}`);
console.log(array);

/*
    The main difference between slice & splice in array:
1) Slice will return the range elements but not include the end index, whereas Splice will return the range elements including end index.
2) Slice will return the elements but it didn't make changes in main array, whereas Splice will return the range elements but it manipulates the main array values.
*/
