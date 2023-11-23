function removeElementFromArray(arr,target){
    return arr.filter(item => item!== target);
}
let arr = [1,2,2,3,4,5,3,2,5,]
let target = 2
let removed = removeElementFromArray(arr,target)

console.log(removed);
