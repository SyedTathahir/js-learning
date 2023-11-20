const User ={// rare syntax 
    _email: 's@st',
    _password: 'bhd',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }

}

const tea = Object.create(User)

console.log(tea.email);
