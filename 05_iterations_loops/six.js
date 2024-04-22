const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item)
    return item
} )

console.log(values); //forEach is not returning any value

for (let i = 0; i < coding.length; i++) {
    const element = coding[i];
    console.log(element);    
}