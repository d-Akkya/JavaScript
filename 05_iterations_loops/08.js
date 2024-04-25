// reduce method:-
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0  )        normal function

const myTotal = myNums.reduce( (acc, currval) => acc+currval, 0 ) //arrow function

console.log(myTotal);
//In this method currentValue is values of array, in first loop accumulator don't know what to take value, so the value of initialValue is assigned to accumulator i.e. 0 + currentValue i.e. 1 = 1
//In the second step, the sum of acc & currval is assigned to accumulator + the second currentValue i.e. 2
//This is how the reduce() method works & returns the total value of an array very easily.

//Realtime example of reduce:
const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course ",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price, 0 )

console.log(priceToPay);  //22996

