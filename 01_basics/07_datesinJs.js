// Dates 
 
let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate)

//let myCreatedDate = new Date(2023,0,23) months start from zero in javascript

// let myCreatedDate = new Date (2023 , 1,21,5,3);
// let myCreatedDate = new Date ("2023-01-14");
let myCreatedDate = new Date ("01-14-2023");
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); used for comparing time and scheduling/selecting dates on web apps.
// console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getFullYear());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);
console.log(`And the next month is ${newDate.getMonth()}`)

newDate.toLocaleString('default',{
    weekday: "long",
    
})