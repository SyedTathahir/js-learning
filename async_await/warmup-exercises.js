const fetchPokemon = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve({data: {namae: "pikachu",power : 20}})
            
            reject(new Error ("Danger Danger"));
        },2000)
        
    })
}
console.log("program starting");

const usePokemon = async()=>{
    try{
        const data = await fetchPokemon();
        console.log(data);
        console.log("done fetching");
    }catch(error){
        console.error(error)
    }
    console.log("there was an error with our code but we're ok")
}
usePokemon();

console.log("Program complete ")