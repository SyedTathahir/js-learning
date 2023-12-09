function findSum(n){
    let a = 0;
    for (let i =0;i<=n;i++){
        a = a+i
    }
    return a ;
}

function findsumTill1000(){
    console.log(findSum(100));
}
function syncSleep(){
    let a = 1;
    for(let i = 0; i<10000000000;i++){
        a++
    }
}
// syncSleep();
// findsumTill1000();
setTimeout(findsumTill1000,1000);
console.log("hello world");