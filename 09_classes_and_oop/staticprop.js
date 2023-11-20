class User {
    constructor(username){
        this.username = username;

    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const syed = new User("syed");
// console.log(syed.createId());static keyword restricts to access objects outside the class

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("iphone","i@phone.com");

iphone.logMe();
console.log(iphone.createId())

