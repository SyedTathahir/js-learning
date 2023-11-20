// let myName = "syed   "

// console.log(myName.truelength);

let myHeros = ["thor","spiderman"];

let heroPower ={
    thor: "hammer",
    spiderman: "sling", 
    
    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }

}

Object.prototype.syed = function(){
    console.log(`syed is present in all objects`);
}
Array.prototype.heySyed =function(){
    console.log(`syed says hello`);
}
// heroPower.syed();
// myHeros.syed();
// myHeros.heySyed();
// heroPower.heySyed();

// inheritance:
const user = {
    username :"syed",
    email: "syed@example.com"
}
const Teacher = {
    makeVideo: true
}

const teachingSupport ={
    isAvailable: false
}

const taSupport ={
    makeAssignment : 'js assigment',
    fullTime : true,
    __proto__ : teachingSupport
}

Teacher.__proto__ = user

//modern syntax:

Object.setPrototypeOf(teachingSupport,Teacher);

let anotherUsername = "Syed "

String.prototype.trueLenght = function (){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True lenght is ${this.trim().length}`);
}
anotherUsername.trueLenght()

"syedtathahir".trueLenght()
"coffeee".trueLenght()