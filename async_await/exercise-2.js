
const fetchFast = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Fast Done")
        },2000)
    })
}
const fetchSlow = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve("Slow Done")  
        },6000)
    })
}
console.log("program Starting");
const firstTimestamp = new Date();
const useData = async()=>{
    const fastResult =  fetchFast();
    console.log(fastResult);

    const slowResult =  fetchSlow();

    

    console.log(slowResult);
    const result = await Promise.all([fastResult,slowResult])
    console.log(result);
    
    const secondTimestamp = new Date ();
    const timeElapsed = secondTimestamp - firstTimestamp;
    console.log("program complete",timeElapsed);
}
useData();
// const secondTimestamp = new Date ();
// const timeElapsed = firstTimestamp - secondTimestamp;
// console.log("program complete",timeElapsed);

