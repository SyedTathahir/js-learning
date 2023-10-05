// let a = 10
// const b = 20 
// var c = 30
// var c = 300
//{} is scope in every language comes with functions,if/else,loops its known as scope of that program and object declaration is also done by this {} 
let a = 300
if(true){
    let a = 10
    const b = 20 
    // var c = 30 and if you also declare with var 
    // c = 30 // this also goes out of this block scope.
    // console.log("Inner a: ",a)
}
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

//++++++++++++ Nested scopes ++++++++++++++++
// child variable can access parent variable
function one (){
    const username = "Syed"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Syed "
    if(username==="Syed "){
        const website = "Youtube"
        // console.log(username + website)
    }
    // console.log(website)//scope is in if statement 
    // console.log(username)

}
// console.log(username)


//++++++++++++++ Interesting Concept +++++++++++++


console.log(addOne (5))//here in this function declaration you can access before initializations.
function addOne (num){
    return num + 1
}


addTwo(5)
const addTwo = function (num){// its called as variable or expression, in this variable holds function and its called as hoisting,so cannot Access before initializations
    return num+2
}




