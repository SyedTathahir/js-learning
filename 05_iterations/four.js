//for in loop:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

// for (const key in  myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`);
// }
// for in loop for Arrays:

const programming = ["js","rb","py","java","cpp"]

for (const key  in programming) {
    console.log(programming[key]);   
}

// for in loop for Maps:

// const map = new Map()
// map.set('IN',"India")
// map.set('USA',"United States of America")
// map.set('FR',"France")
// map.set('IN',"India")

// for (const key in map) {// Maps are not iterable  with for in loop.
//     console.log(key);
// }


