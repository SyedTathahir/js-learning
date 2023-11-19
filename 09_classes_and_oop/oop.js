const user = {
    username: "syed",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from datbase")
        // console.log(`Username: ${this.username}`);
        console.log(this)
    }

}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// const promiseOne = new Promise()
// const date = new Date()

function User (username,loginCount,isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function (){
        console.log(`welcome ${this.username}`);
    }

    // return this implicitly its returned ,no need to explicitly return this
    return this;


}

const userOne = new User("Raju",12,true)// new keyword create  empty object which is known as instance 1. constructor function is called with new keyword and pack all arguments and give it to you 2.this inject all those arguments 3.then it will get back to you  
const userTwo = new User("Syed",10 ,false)
console.log(userOne.constructor);
// console.log(userTwo);
