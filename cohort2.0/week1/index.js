// const fs = require("fs")
// // filesystem module.

// fs.readFile("a.txt","utf-8",function(err, data){
//     console.log(data);
// })

// console.log("hi there from index.js");

// for(let i = 0 ;i<10;i++){
//     let a = 1;
//     a++;
//     console.log("in loop");
// }
// console.log("Hi there 2 form index.js");

// callbacks ugly async code:

const { AsyncLocalStorage } = require('async_hooks');
const { log } = require('console');
const { promises } = require('dns');
const fs = require('fs')

// async function:

// function syedReadFile(cb){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         cb(data)
//     })
// }
// function dataOn(data){
//     console.log(data)
// }

// syedReadFile(dataOn);
// console.log("hi there before async code");

// Promisify above code:

// function syedReadFile(){
//     console.log("inside syedReadFile ");
//     return new Promise(function(resolve){
//         console.log("Inside Promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             console.log("Before Resolve");
//             resolve(data);
//             console.log("After resolve");
//         })
//     })
// }
// function dataOn(data){
//     console.log(data);
// }
// let a = syedReadFile()
// a.then(dataOn);
// console.log(a);
// console.log("hi there before async code");

// let d  = new Promise(function(resolve){
//     setTimeout(function(){
//         resolve("foolish")
//     },10000)
// })
// console.log(d);
// function cb(){
//     console.log(d)
// }

// d.then(cb)


// dummy async function that resolves immediately:

// function syedAsyncFunc(){
//     return p = new Promise(function(resolve){
//         resolve("hi there")
//     });
//     // return p ;
// }
// const value = syedAsyncFunc();

// value.then((data)=>{
//     console.log(data);
// })

// simple callback func:

// function syedAsyncFunc(callback){
//     setTimeout(callback,2000)
// }

// syedAsyncFunc(()=>{
//     console.log("Hello async code");
// })
// console.log("hi there not waiting for async code");

// promisify above code:

// function syedAsyncFunc(){
//     let p = new Promise(function(resolve){
//         setTimeout(resolve,2000)
//     });
//     return p;
// }

// const value = syedAsyncFunc();
// value.then(()=>{
//     console.log("Hello Async code after promise resolved ")
// })

// console.log("Hi there not waiting for promise ");

// Async Await examples:

function syedAsyncFunc(){
    let p = new Promise(function (resolve){
        setTimeout(function(){resolve("Hello Async Await")}
        ,4000)
    });
    return p;
}
async function main(){
    // syedAsyncFunc().then((value)=>{
    //     console.log(value);
    // });In this syntax hi there 2 will immediately get consoled
    let value = await syedAsyncFunc();// await stop execution of below code till it gets resolved then below code will be executed
    
    console.log("hi there 2 ");//caller side uses async await.
    console.log(value);// rather than using .then syntax, we add await before and get the final value in the variable
}
main();
console.log(" In main() Hi there not waiting for promise to resolved");