// let tinderUser = {} //non-singleton object, created by object literals => {}

const tinderUser = new Object() //Singleton object, created using constructor

tinderUser['id'] = '123abc' //changing/adding the value in object
tinderUser.name = 'Sam'
tinderUser['isLoggedIn'] = false
console.log(tinderUser);

const regularUser = {
    email: 'asdf@gmail.com',
    fullname: {
        userFullName: {
            firstName: "Akhilesh",
            lastName: 'Bamane'
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname.userFullName);
//console.log(regularUser.fullname.userFullName.firstName);
console.log(regularUser['fullname']['userFullName']['lastName']); //access objects nesting depth => Bamane

//Let's merge objects:
const obj1 = {1: 'a', 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} this can't solve the method or way to merge objects
// const obj3 = Object.assign(obj1, obj2) //now this can easily merge the objects into one
let obj3 = Object.assign({}, obj1, obj2) //but the Object.assign method we can use optional parameter {} as target, and other merging values as source, so that result be confirmed in object.
console.log(obj3);
//suppose we have more tha 2 objects to merge:
const obj4 = {5: 'e', 6: 'f'};
/*
obj3 = Object.assign({}, obj1, obj2, obj4) //so here {} is target and obj1, obj2, obj4 is source and it is storing in target {} not in obj1.
//visit mdn doc for more reference about Object.assign
console.log(obj3);
*/

//but we are using simple syntax most of the time is spread:
obj3 = {...obj1, ...obj2, ...obj4}
console.log(obj3);

//Now when we getting the data from database, we are using the syntax most time:
const users = [
    {
    },
    {
        id: 1,
        email: 'a@gmail.com'
    },
    {
        id: 2,
        email: 'b@gmail.com'
    },
    {
    },
    {}
] //to access the values, it is an array
console.log(users[1].email);

//we can collect all the keys & values from an array:
console.log(tinderUser);
console.log(Object.keys(tinderUser)); //need to tell the method is applied on which object by objectname.
console.log(Object.values(tinderUser)); //the return datatype of these two methods are array, so we can apply loops on it => [ '123abc', 'Sam', false ]. Also these two methods are very important, comes to used the most.

console.log(Object.entries(tinderUser)); //entries method is rarely used, it returns every single array of every key and value of an object. The first as key & second element is value => [ [ 'id', '123abc' ], [ 'name', 'Sam' ], [ 'isLoggedIn', false ] ]

//Ask question to object wether the property exist or not:
console.log(tinderUser.hasOwnProperty('isLoggedIn')); //before using the property it is better to check wether the following property exist or not in the object => true