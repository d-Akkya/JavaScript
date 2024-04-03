// switch-case statement
//it is used in Redux.

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// } //basic syntax

const month = "March"

switch (month) {
    case "Jan":
        console.log("January");
        break;
    case "Feb":
        console.log("Feb");
        break;
    case "March":
        console.log("March");
        break;
    case "April":
        console.log("April");
        break;

    default:
        console.log("Out of reach");
        break;
} //'break' is interesting when the key value match if we didn't use the 'break' it will not check the remaining conditions automatically executes the all code except 'default'.
//We can compare the values in number also in string it's easy like if-else statement. Check case-sensitivity while checking the string.