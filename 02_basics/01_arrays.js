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