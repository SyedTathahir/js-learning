class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    get password(){
        return  `${this._password}syed`
    }
    set password(value){
        this._password = value
    }
}

const syed = new User ("syed@example.com","abc")
console.log(syed.password);