const accountId = 007

// accountId = 2 / not allowed

let accountEmail = "xyz@test.com" 
var accountPassword = "test@123"
accountCity = "Miraj"

accountEmail = "test@akkya.com" //executed successfully

accountPassword = "Pass@123" //executed successfully

accountCity =  "Athani" //executed successfully

console.log(accountEmail);

let accountState; //not assigned the values to variable

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);
