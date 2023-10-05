function sayMyname (){
    console.log("S");
    console.log("Y");
    console.log("E");
    console.log("D");
}

// sayMyname() to execute function

// function addTwoNumber(number1,number2){//parameters
//     console.log(number1 + number2)
// }
function addTwoNumber(number1,number2){//parameters
    //  let result = number1 + number2
    //  return result
    return number1 + number2
}

addTwoNumber();// no arguments given
addTwoNumber(4,5)// arguments given
addTwoNumber("4",5)
addTwoNumber(4,"a")
addTwoNumber(4,null)
const result = addTwoNumber(1,2)
// console.log("Result:",result);

// function loginUserMessage (username) {
//     // if(username === undefined){
//     //     console.log("Please Enter a Username ")
//     //     return
//     // }
//     if(!username){// ! not equal to username
//         console.log("Please Enter a Username");
//         return
//     }
//     return `${username} just logged in `
// }
function loginUserMessage (username = "Sam") {
    // if(username === undefined){
    //     console.log("Please Enter a Username ")
    //     return
    // }
    if(!username){// ! not equal to username
        console.log("Please Enter a Username");
        return
    }
    return `${username} just logged in `
}

// console.log(loginUserMessage("Syed"))
console.log(loginUserMessage(""))
console.log(loginUserMessage())
console.log(loginUserMessage("Syed"))// overriding the parameter 