// function onDone(){
//     console.log("hi there in onDone");
// }

// setTimeout(onDone,1000);
// console.log("After setTimeout");

const fs = require("fs")

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
    
})
console.log("before file is read I got executed");