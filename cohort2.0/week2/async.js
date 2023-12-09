// function onDone(){
//     console.log("hi there in onDone");
// }

// setTimeout(onDone,1000);
// console.log("After setTimeout");

const fs = require("fs")
function putname(cb){
fs.readFile("a.txt","utf-8",(err,data)=>{
    data = data + "Hi syed"
    fs.writeFile("a.txt", ()=>{
        cb();
    })
    
})
}
putname(cb= ()=>{
    console.log("name is written");
})
console.log("before file is read I got executed");