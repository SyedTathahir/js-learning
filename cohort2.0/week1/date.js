const currentDate = new Date();

// console.log(currentDate.getMonth()+1);
// console.log(currentDate.getDate());
// console.log(currentDate.getFullYear());
console.log("current date: "+ currentDate);
// various components of date:

console.log("Date: "+ currentDate.getDate());
console.log("Month: "+ currentDate.getMonth() + 1);// because of zero index it shows one month back so add + 1 
console.log("Year: "+ currentDate.getFullYear());
console.log("Hours: "+ currentDate.getHours());
console.log("Minutes: "+ currentDate.getMinutes());
console.log("Seconds: "+ currentDate.getSeconds());

// setting components of the date:
currentDate.setFullYear(2022);// set year,month ,date.
console.log("After setFullYear: "+ currentDate);

// setTime:

// console.log("Time in milliseconds since 1970: ", currentDate.getTime()); // epoch timestamp 

// function calculateSum (){
//     let a = 0
//     for (let  i = 0 ;i<100000000 ;i++){
//         a  = a+i 
//     }
//     return a ;
// }
// const beforeDate = new Date()
// const beforeTimeInMs =beforeDate.getTime();
// calculateSum();
// const afterDate = new Date();
// const afterTimeInMs = afterDate.getTime();

// console.log(afterTimeInMs - beforeTimeInMs)

// counter: 
function currentTimePrint(){
    console.log(new Date().getTime());
}
setInterval(currentTimePrint, 1000)