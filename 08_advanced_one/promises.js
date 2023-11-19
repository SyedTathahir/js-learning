const promiseOne = new Promise(function (resolve,reject){
    //do an async task
    // db calls,cryptography,network
    setTimeout(function (){
        console.log('Async task is complete');
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed");
});

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2 ");
        resolve();
    },1000)
}).then(function(){
    console.log("Async 2 resolved")
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "syed",email:"syed@example.com"})
    },1000)
})

promiseThree.then(function (user){
    console.log(user);
})

const promisFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            resolve({username:"syed",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})
promisFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(()=>{
    console.log("the promise is either resolved or rejected")
})

const promisFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            resolve({username:"javascript",password:"123"})
        }
        else{
            reject('ERROR: javascript went wrong')
        }
    },1000)
});

async function consumePromiseFive(){
    try{
        const response = await promisFive 
    console.log(response);
    }
    catch(error){
        console.log(error)
    }

}
consumePromiseFive();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//     const data = await response.json()
//     console.log(data);
//     }
//     catch(error){
//         console.log("E: ",error);
//     }`
// }

// getAllUsers();

fetch('https://api.github.com/users/syedtathahir').then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})









