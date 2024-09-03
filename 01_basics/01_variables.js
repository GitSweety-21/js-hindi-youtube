const accountId = 123456
let accountEmail = "abcd@gmail.com";
var accountPassword = "12345"
accountcity = "Cuttack"
let accountstate;


//accountId = 2//not allowed

accountEmail = "cde@gmail.com"
accountPassword="2121212"
accountcity = "bbsr"

console.log(accountId);

/*

prefer not to use var 
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity,accountstate])
