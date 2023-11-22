function findLargestElement(){
    return arr.reduce((max,current)=>
        current > max  ? current : max
    )
}
let arr = [1,2,3,4,5,6]


let reduce = findLargestElement(arr);
console.log(reduce);