//for in loop:

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'Ruby',
    swift: 'Swift by Apple'
}

for (const key in  myObject){
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
