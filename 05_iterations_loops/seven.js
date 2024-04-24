const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const akkya = []

myNumbers.forEach( (num) => {
    let add = num + 10
    akkya.push(add)
} )

console.log(akkya);