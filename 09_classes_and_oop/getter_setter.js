class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
         this._email = value// setters don't return value 
    }
    get password(){
        return  `${this._password}syed`
    }
    set password(value){
        this._password = value//change name like _password
    }
}

const syed = new User ("syed@example.com","abc")
console.log(syed.password);
console.log(syed.email);
