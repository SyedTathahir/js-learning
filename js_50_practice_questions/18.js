async function fectchData (){
    try{
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
        let data = await response.json();
        console.log(data);

    }
    catch(err){
        console.error("Error fetching Data"+err)
    }
}

fectchData();