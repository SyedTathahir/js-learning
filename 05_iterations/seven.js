const myNumbers = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNumbers.map( (num) => num +10)//map automatically returns the value in it.and it does not mandate conditions to be applied.

const newNums = myNumbers//chaining 
    .map( (num)=> num*10 )
        .map((num) => num + 1)
            .filter((num)=> num>=40)//its true or false

console.log(newNums);

// myNumbers.forEach( (items)=> {
//     console.log(items+10)
// })


