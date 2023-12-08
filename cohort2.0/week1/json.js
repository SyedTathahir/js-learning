const users = '{"name": "syed","age": 20,"gender":"male"}'

// JSON.parse:

// const user = JSON.parse(users)
// console.log(user["name"]);
// console.log(user["gender"]);
// console.log(user["age"]);

// JSON stringify:

const  user = {
    name: "syed",
    age : 20,
    gender: "male"
}

const finalString = JSON.stringify(user)
console.log(finalString);