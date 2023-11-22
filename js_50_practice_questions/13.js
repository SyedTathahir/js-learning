let arr = [1,2,3,4,5,6];

function filterEvenNumber(arr){
    return arr.filter(num => num%2 === 0);
}
console.log(arr);
console.log(filterEvenNumber(arr))

