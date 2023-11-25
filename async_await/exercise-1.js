
const fetchUser =()=>{
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve({data:{user: "monkey",admin:true}})
        },3000)
    })
};

const logIn = (user)=>{
    if(user.admin === true){
        console.log("successfully logged in ");
    }
    else{
        console.log("Failed to log in ,please try again")
    }
}

const useAdmin= async()=>{
    const result = await fetchUser();
    console.log(result);
    logIn(result.data);

}

useAdmin();
console.log("program completed");