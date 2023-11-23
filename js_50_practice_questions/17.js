function getCurrentDateAndTime(){
    let currentDate = new Date()
    return currentDate.toLocaleString();
}

console.log(getCurrentDateAndTime());
// console.log(new Date());