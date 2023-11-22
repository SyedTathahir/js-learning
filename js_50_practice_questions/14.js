let arr = [1,2,3,4,5,6];

function doubleArray(array){
    return array.map((num)=>{
        return num*2;
    })
}

console.log(doubleArray(arr));