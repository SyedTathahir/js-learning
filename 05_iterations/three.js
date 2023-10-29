// for of 

// ["","",""]
// [{},{},{}]


// const arr = [1,2,3,4,5]
// for (const iterator of arr) {
//     console.log(`Number is : ${iterator}`)
// }

// const greeting  = "Hello Syed"
// for (const greet of greeting){
//     console.log(`Each character is : ${greet}`);
    
// }

//Maps:

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")
map.set('IN',"India")// it does not store duplicate value,it stores unique value and it remembers the order of key value pairs.

console.log(map);

// for of loop on maps:

for (const [key,value]  of map) {
    console.log(key,':-',value);
}

// for of loop on object:

const myObject = {
    'game1': 'NFS',
    game2: 'Spiderman'
}

for (const [key,value] of myObject) {// objects are not iterable with for of loop.
    console.log(key,':-',value);
    
}



