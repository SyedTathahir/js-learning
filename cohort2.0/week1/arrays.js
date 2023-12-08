const initialArray = [1,2,3]
const secondArray = [4,5,6]
initialArray.pop();
console.log(initialArray);
initialArray.push(3)
console.log(initialArray);
// delete from front:
initialArray.shift()
console.log(initialArray);
// put value in front:
initialArray.unshift(0,1)
console.log(initialArray);
// merge two arrays:
// console.log(initialArray.concat(secondArray)); 
// anotherway to concat:
const finalArray = initialArray.concat(secondArray)
console.log(finalArray);

//traversing array:
// for(let i = 0 ;i<initialArray.length;i++){
//     console.log(initialArray[i]);
// }
// another way to traverse array:
function logThing(str){
    console.log(str + " is the string")
}
initialArray.forEach(logThing)

// Map, Filter, Reduce,Find , Sort:

