// Immediately Invoked Function Expression (IIFE)
// to avoid global scope pollution like declaration , variables hence iife is used
(function coffee(){
    //named iife
    console.log(`DB CONNECTED`)
})();// ; is used to iife to stop 
// coffee(); not iife

// () is function definition second () is execution call.

// ( function coffeeandcode () {
//     console.log(`DB CONNECTED`);
// } )();
// ( ()=> {
//     console.log(`DB CONNECTED WITH ARROW FUNCTION`)
// }  )();
( (name)=> {
    //un named iife
    console.log(`DB CONNECTED WITH ${name}`)
}  )("Syed");// parameter

