function makeApiCall(url,callback){
    fetch(url)
    .then(response => response.json())
    .then(data => callback(data) )
    .catch(err => console.error("Error during api call"))
}

function handleData(data){
    console.log("processed data ",data);
}

function main(){
    const apiurl1 = 'https://jsonplaceholder.typicode.com/posts/1'
    const apiurl2 = 'https://jsonplaceholder.typicode.com/posts/2'

    makeApiCall(apiurl1,handleData)
    makeApiCall(apiurl2,handleData)

}
main();