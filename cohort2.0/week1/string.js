// function findIndexOf(str, target) {
//   console.log("Orignal str: ", str);
//   console.log("Index: ", str.lastIndexOf(target));
// }
// findIndexOf("hello world world world", "world");

// // slice:until the end index not include last index.
// function getSlice(str, start, end) {
//     console.log("Orignal str: ", str);
//     console.log("Index: ", str.slice(start, end));
//   }
//   getSlice("hello world", 0, 5);
  //another example:
//   const value = "Syed Tathahir Uddin";
//   let ans = value.slice(2, 5);// it with index 2 and end at index 5
// //   let ans2 = value.substr(2, 5);// it will start with index 2 and go until the length 5  
//   console.log(ans);
//   console.log(ans2);

// another example:
// function cutIt(str,startindex,endindex){
//     let newStr= "";
//     for(let i=0;i<str.length;i++){
//         if(i>=startindex && i< endindex){
//             newStr = newStr + str[i];
//         }
//     }
//     return newStr
// }
  
// const value = "Syed Tathahir Uddin"

// let ans = value.slice(2,5)
// console.log(ans);

// console.log(cutIt(value,2,5));

// Replace string::

// const str = "hello world"

// console.log(str.replace("world","javascript"));

//Split:

// const value = "hi, my, name ,is ,Syed Tathahir Uddin"
// const words = value.split(",");
// console.log(words);

// Trim:

 const value = "      Syed Tathahir Uddin       ";

// console.log(value.trim());
// UpperCase:

console.log(value.toUpperCase());
//LowerCase:

console.log(value.toLowerCase());