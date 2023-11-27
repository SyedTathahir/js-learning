const goGetCandies = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({candy: "sourkeys",quantity:10})
        },2000)
    })
}

const sellCandies = (candy)=>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(25 * candy.quantity) 
        },3000)
    })
}

const useCandies = async ()=>{
    const candy = await goGetCandies();
    const totalCandy = await sellCandies(candy);
    console.log(totalCandy);
    const time2 = new Date();
    console.log(`${time2 - time1} ms passed `);
};
console.log("program Started");
const time1 = new Date()
// useCandies();

const candy = goGetCandies();
candy
.then((result)=>{
    const sellvalue = sellCandies(result)
    console.log(sellvalue);
    sellvalue.then((value)=>{
        console.log(value);
        const time2 = new Date();
    console.log(`${time2 - time1} ms passed `);
    })
})

console.log("program Completed");