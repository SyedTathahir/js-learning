//if  
// const isUserloggedIn = true
// const temperature = 41
// if (2=='2'){
//     console.log("executed")
// 
// 
//<,>,<=,>=,== checking is it equal ,!= not equal,=== it also checks the type of variable,!== anti pattern checking 

// if ( temperature === 41 ){
//     console.log ("less than 50 ")
// }
// else{
//     console.log("greater than 50 temperature")
// }

// const score = 200
 
// if (score>100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// const balance = 1000

// // if (balance > 500) console.log("test") don't do this bad practise

// if (balance < 500){
//     console.log("less than")
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200 or greater than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInfromGoogle = false
const loggedInfromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy courses");
}
if(loggedInfromEmail || loggedInfromGoogle ){
    console.log("User logged in ");
}



