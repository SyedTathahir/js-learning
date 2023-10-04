// singleton 
Object.create
// object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Syed",
    "full_name": "Syed Tathahir Uddin",// you cannot access this by . operator
    [mySym]: "myKey1",//you have to keep symbol in square brackets
    age: 20,
    location: "Hyderabad",
    email: "user@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
const mysym2 = Symbol("key2");
const JsUser2 = {
    mysym2: "mykey2"
}
console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full_name"])
console.log(JsUser[mySym])// and also to access the value you have to use square brackets not dot operator.
console.log(typeof JsUser[mySym]);

JsUser.email = "syed@chatgpt.com";// value overriding
//Object.freeze(JsUser)// locking of values of object
JsUser.email = "syed@microsoft.com"
console.log(JsUser);// here mysym will be used as Symbol.
console.log(JsUser2);// here mysym2 will be as string.

JsUser.greeting = function(){
    console.log("Hello  Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
