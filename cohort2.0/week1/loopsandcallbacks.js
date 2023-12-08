// let ans = 0 ;

// function findSum (n){
//     let ans = 0 
//     for(let i = 0;i<=n;i++){
//         ans = ans + i
//     }
//     return ans;
// }
// console.log(findSum(100));

// callbacks:

// function square (n){
//     return n*n;
// }
// function cube (n){
//     return n*n*n
// }

// function sumofSquare(a,b){
//     const val1 = square(a);
//     const val2 = square(b);
//     return val1 + val2
// }
// function sumofCube(a,b){
//     const val1 = cube(a);
//     const val2 = cube(b);
//     return val1 + val2;
// }
// console.log(sumofSquare(1,2))
// console.log(sumofCube(1,2))

// callbackify above code:

function square(n){
    return n*n;
}
function cube(n){
    return n*n*n;
}
function sumofSomething(a,b,callback){
    console.log(a);
    console.log(b);
    console.log(callback);
    const val1 = callback (a);
    const val2 = callback (b);

    return val1 + val2
}

let ansOfSquare = sumofSomething(1,2,square);
let ansOfCube = sumofSomething(1,2,cube);

console.log(ansOfSquare);
console.log(ansOfCube);