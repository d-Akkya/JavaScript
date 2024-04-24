const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item //return not works in forEach
} )

console.log(values); //forEach is not returning any value
//Sometimes we get the situation when we don't need the values of array must be printed, we need to return or get the values from array on the condition basis.

//for that situation we use filter:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4 ) //implicit return
const newNums = myNums.filter( (num) => {
    return num > 4 //explicit return (scope starts)
} )
//This is basics of filter simple callback fn and then condition, whenever the condition satisfies the values matching the condition will be returned and which values not satisfies the condition will be not returned by 'filter'
console.log(newNums);

//But if we want to use forEach for same output of 'return':
const num = []

myNums.forEach( (val) => {
    if (val > 4) {
        num.push(val)
    }
} ) 
console.log(num); //this method also works, but we need apply logic in this method & filter is much easier

//More practice on filter with another example:
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter( (bk) => bk.genre === "History" )

console.log(userBooks);

