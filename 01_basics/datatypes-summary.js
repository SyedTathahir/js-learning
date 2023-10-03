// #Primitive data type:
// 7 types: String , Number , Boolean , null = empty,Undefined,Symbol,BigInt

const score = 100;
const scoreValue = 100.3;

const isloggedIn = false
const outsideTemp = null
let userEmail = undefined; // === let userEmail;

const id = Symbol('123')
const anotherId  = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 32940290939n// => bigInt



// #Reference (Non Primitive)
// types:Array , Objects , Functions
// they always return object as type 

const heroes = ["Batman","Antman","Superman"]
//objects are in curly braces: 
// objects can be stored into variables also 

let myObj = {
    name:"Syed",
    age: 20,

}

//function as variables

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof scoreValue);
console.log(typeof myFunction);
console.log(typeof anotherId);