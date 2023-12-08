// const dog = {
//     name: "doggie",
//     legCount: 4,
//     speaks: "bhow bhow"
// }
// const cat = {
//     name: "cat",
//     legCount: 4,
//     speaks: "meow"
// }
// function printStr(animal){
//     console.log("animal "+ animal["name"]+ " " + animal["speaks"])

// }
// // animal x bhow bhows with 2 legs

// printStr(dog)
// printStr(cat)

class Animal{// class is blueprint 
    constructor(name,legCount,speaks){
        this.name= name;
        this.legCount = legCount;
        this.speaks = speaks
    }
    static myType(){// static methods can be called by class itself without instanciating an object.
        console.log("my type is Animal")
    }
    speak(){// classes can have functions
        console.log(" hi there "+ this.speaks)
    }
}

let elephant = new Animal("elephant",4 ,"growls")// Do this 
// Don't do this :
// let elephant = {
//     name:"elephant" ,
//     legCount : 4,
//     speaks: "growl"
// }

let dog = new Animal("dog",4,"bhow bhow");// create object
let cat = new Animal("cat",4,"meow meow");

Animal.myType();
// Animal.speak(); class cannot call directly function without static keyword.

elephant.speak();// call function on object.
dog.speak();
cat.speak();