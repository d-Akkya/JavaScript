const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item //return not works in forEach
} )

console.log(values); //forEach is not returning any value
//Sometimes we get the situation when we don't need the values of array must be printed, we need to return or get the values from array on the condition basis.

//for that situation we use filter:
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
//This is basics of filter simple callback fn and then condition, whenever the condition satisfies the values matching the condition will be returned and which values not satisfies the condition will be not returned by 'filter'
console.log(newNums);


