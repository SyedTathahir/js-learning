let score = false

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isloggedIn = "syed"
let booleanIsLoggedIn = Boolean(isloggedIn)
console.log(booleanIsLoggedIn);

// 1 => true ; 0 => false 
// " "=> false 
// "syed " => true

let someNumber = 33

let stringNumber =  String ( someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);