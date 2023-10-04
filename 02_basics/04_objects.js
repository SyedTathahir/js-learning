// singleton or constructor

// const tinderUser = new Object() // singleton object

const tinderUser = {}// Non - singleton Object.

tinderUser.id = "13hh6"
tinderUser.name = "Manny"
tinderUser.isLoggedIn= false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{//objects in objects
        userfullname:{
            firstname:"Syed",
            lastname:"Tathahir"
        }
    }
}
console.log(regularUser.fullname);
console.log(regularUser.fullname?.userfullname);// (?) used to protect and check the value is present or not.
console.log(regularUser.fullname.userfullname.lastname);

// combining of objects ________________

const obj1 = {1: "a" , 2: "b"};
const obj2 = {3: "c" , 4: "d"};
const obj4 = {5: "e",6:"f"}
// const obj3 = {obj1, obj2}

// const obj3 = Object.assign({},obj1,obj2,obj4)//not used much

const obj3 = {...obj1,...obj2,...obj4}// used 90% of time.

// console.log(obj3);


// Arrays with multiple objects _________________


const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "y@gmail.com"
    },
    {
        id: 3,
        email: "e@gmail.com"
    }
    
]
users[1].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));// not used much
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));
