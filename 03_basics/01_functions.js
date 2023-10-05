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
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())
// console.log(loginUserMessage("Syed"))// overriding the parameter 


function calculateCartPrice(val1, val2,...num1){// rest operator

    return num1
}
//(...) both are rest operator and spread operator and depends on use case for calling it.

// console.log(calculateCartPrice(62,400, 599 ,2000))

const user = {
    username: "Syed",
    prices: 199
}

function handleObject (anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}

// handleObject(user)

handleObject({// passing objects as argumensts.
    username: "Sunny",
    price: 399
})

const myNewArray = [200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([4005,6654,908,899]))