const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,curval){
//     console.log(`acc: ${acc} and curval: ${curval}`)
//     return acc+curval
// },5)

const myTotal = myNums.reduce( (acc,curval)=>{
    console.log(`acc : ${acc} and curval : ${curval}`)
    return acc+curval
},4)


console.log(myTotal)

const shoppingCart = [
    {
        itemName:"js course",
        price: 1999
    },
    {
        itemName:"java course",
        price: 999
    },
    {
        itemName:"python course",
        price: 2999
    },
    {
        itemName:"datascience course",
        price: 3999
    },
    
]

const priceToPay = shoppingCart.reduce( (acc,item)=>{
    return acc+item.price
},0)
console.log(priceToPay)



