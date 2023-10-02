const accountId  = 1324334
let accountEmail = "syed@google.com"
var accountPassword = "12345"
accountCity = " jaipur"

let accountState;//undefined

//accountId = 2
accountEmail = "hc@hc.com"
accountPassword = "23454324"
accountCity = "benguluru"
console.log(accountId);

/*
prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])