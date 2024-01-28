console.log(1 < 2);
console.log(1 >= 2);
console.log(1 > 2);
console.log(1 <= 2);
console.log(2 == 3);
console.log(1 != 2);

console.log("2" > 1);
console.log("02" < 1); //this type of comparison is possible but always check weither datatypes are same while comparing for no confusions.

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0); //true
//Because an equality check == and comparisons <> <= >= work differently. That's why (3)null >= 0 is true and (1)null > 0 is false.
//Some it converts null into 0 and sometimes into NAN so, always avoid this type conversion/comparison for no confusions. Remember Clean Code,


console.log(undefined == 0); //false 
console.log(undefined > 0); //false
console.log(undefined < 0); //false
console.log(undefined >= 0); //false
//Also avoid this type of conversion/comparison. Always remember code readability is our first priority.

// ===
console.log("2" == 2); //true => it converts the datatypes and not compares between datatypes.
console.log("2" === 2); //false => it also make comparison between datatypes no conversion.







