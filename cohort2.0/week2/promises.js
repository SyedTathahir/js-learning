// callback eg:

function mysettimeOut(callback,duration){
    setTimeout(callback,duration);
}
mysettimeOut(function(){
    console.log("hello callback")
},1000)
// promisify function:

function promisifymysettimeOut(duration ){
    let p = new Promise(function (resolve){
        setTimeout(()=>{resolve()
        },duration)
    })
    return p;


}
const ans = promisifymysettimeOut(3000)
console.log(ans);
ans.then(function(){
    console.log("hello promise")
})