//Array

// const myArray = [0,1,2,3,4,5,true,"Syed"]

const myArray = [0,1,2,3,4,5]
const myHeros = ["Batman","Superman"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArray[0]);
// console.log(myHeros[1]);

// Array methods:

// myArray.push(6)
// myArray.push(7)
// myArray.pop()

//myArray.unshift(9) not used as much but used in todo app making.
// myArray.shift()

// console.log(myArray.includes(9));//boolean output.
// console.log(myArray.indexOf(9));//-1 output.
// console.log(myArray.indexOf(2));//index output.

// const newArr = myArray.join()//bind the array and also converts it into string.

// console.log(myArray);
// console.log(newArr);
// console.log(typeof newArr);

//++++ slice and splice ++++++++

console.log ("A " , myArray);

const myn1 = myArray.slice(1,3);


console.log(myn1);
console.log("B ",myArray);

const myn2 = myArray.splice(1,3);
console.log("C ",myArray);
console.log(myn2);