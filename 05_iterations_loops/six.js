const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
} )

console.log(values); //forEach is not returning any value
//Sometimes we get the situation when we don't need the values of array must be printed, we need to return or get the values from array on the condition basis.
