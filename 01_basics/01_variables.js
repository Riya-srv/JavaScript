const accountId = 240560;
let accountEmail = "riya@google.com"
var accountPassword = "1234"
accountCity = "Bengaluru"
let accountState;

//accountId = 230; //Not Allowed as it is declared as const

/*
Prefer not to use var because of block scope issue.
*/

accountEmail = "riya@gmail.com"
accountPassword = "2345"
accountCity = "Pune"

console.log(accountEmail);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])