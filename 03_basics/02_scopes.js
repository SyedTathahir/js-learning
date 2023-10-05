// let a = 10
// const b = 20 
// var c = 30
// var c = 300
//{} is scope in every language comes with functions,if/else its known as scope of that program and object declaration is also done by this {} 
let a = 300
if(true){
    let a = 10
    const b = 20 
    // var c = 30 and if you also declare with var 
    // c = 30 // this also goes out of this block scope.
    console.log("Inner a: ",a)
}
for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

console.log(a);
// console.log(b);
// console.log(c);