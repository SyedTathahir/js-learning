// const userEmail = "a@amaan.ai"
const userEmail = []
// const userEmail2 = ""// empty string

// if(userEmail){
//     console.log("Got user email");
// }
// else{
//     console.log("Don't have user email");
// }

//falsy values:
// false, 0,-0,BigInt 0n ,"", null , undefined,NaN
// and all other truthy values

// truthy values:
// "0",'false'," ",[],{},function(){}empty function,


// if( userEmail.length===0){
//     console.log("Array is Empty");
// }

const emptyObject= {}

if(Object.keys(emptyObject).length === 0){
    console.log("object is empty");
}

// Nullish Coalescing Operator (??): null undefined:

let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1  = null ?? 10 ?? 30


console.log(val1);

// Ternery Operator:

// condition ?  true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("More than 80");


