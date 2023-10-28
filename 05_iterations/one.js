for (let i=0 ; i <=10 ; i++){
    const element = i ;
    if (element === 5 ){
        // console.log("5 is best number");
    }
    // console.log(element);
}

// for(let i = 1; i<=10 ; i++){
//     console.log(`Outer loop  value : ${i}`);
//     for(let j = 1; j<=10; j++ ){
//         // console.log(`Inner loop value: ${j}`);
//         console.log(i+'*'+j + ' = ' + i*j);
//     }

// }

// let myArray = ["Flash","Batman", "superman"]
// console.log(myArray.length);
// for (let index = 0; index <=myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and continue:

// for (let index = 0; index <= 20; index++) {
//     if(index == 5){
//         console.log(`Detected 5 `);
//         break;
//     }
//     console.log(`value of index is ${index}`);
    
// }
// console.log(`breaked the block after 5`);


for (let index = 0; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5 `);
        continue;//it skip the value for one time and not breaks the loop
    }
    console.log(`value of index is ${index}`);
    
}



