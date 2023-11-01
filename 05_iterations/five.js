const coding = ["js","ruby","java","python","cpp"]

// coding.forEach(function (item) { // callback functions does not have name
//     console.log(item)
// } )

// coding.forEach((value)=> {//arrow function with for each
//     console.log(value)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
//     console.log(item,index,arr)
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "Java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item)=> {
    console.log(item.languageName)
})
