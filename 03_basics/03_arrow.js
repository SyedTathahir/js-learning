const user = {
    username: "Syed",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},Welcome to Website`);// this refers to current context or nothing but current value.
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "Sunny"// value changed
// user.welcomeMessage()

//console.log(this);// in node environment this is empty {} object there is no context present at this time

// But in browser when you console (this) the most global object is window object then only you can access event of windows like submit,click etc.


// function coffee(){
//     let username = "Syed"
//     console.log(this.username);// but when you console (this) inside a function it cannot access current context of variable in functions 

// }
// coffee()

//+++++++++++ Arrow functions +++++++++++

// const coffee  = function (){
//     let username = "Syed"
//     console.log(this.username)
// }
const coffee  =  () => {// this is arrow function remove function keyword and add => arrow with equals sign
    let username = "Syed"
    console.log(this);
}

coffee()

// pure arrow function: () => {}

// const addTwo = ( num1, num2 ) => {
//     return num1 + num2
// }
// explicit return arrow function: return keyword is used.
// implicit return arrow function:if { } is used have to write return keyword but ( ) is used return not required to write.

// const addTwo = ( num1, num2 ) =>  num1 + num2
// const addTwo = ( num1, num2 ) =>  (num1 + num2)
// when returning object with arrow function you have to wrap object into ( ).
const addTwo = ( num1, num2 ) =>  ({username:"Syed"})


// console.log(addTwo(2,3))

// const myArray = [2,3,6,7,8]

// console.log(myArray.forEach(()=> ()))

