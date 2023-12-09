function square(n){
    console.log("square called");
    return n*n;
}

function cube(n){
    console.log("cube called");

    return n*n*n;
}

function sumofSomething(a,b,cb){

    let val1 = cb(a);
    console.log(val1);
    let val2 = cb(b);
    console.log(val2);
    return val1 + val2;
    
}
const ans = sumofSomething(1,2,square);
const ans2 = sumofSomething(1,2,cube);

console.log(ans);
console.log(ans2);


