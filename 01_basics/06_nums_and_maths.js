// const score = 400
// console.log(score);
// const balance = new Number(100)

// console.log(balance);

// console.log(balance.toString().length)
// console.log(balance.toFixed(1))

// const otherNumber = 134.35445

// console.log(otherNumber.toPrecision(2));
// console.log(otherNumber.toPrecision(3));//priority given to digits before decimal

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++ MATHS +++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// absolute value
// console.log(Math.abs(4));// absolute value
// console.log(Math.round(4.6));// round of value
// console.log(Math.ceil(4.6));// top of value
// console.log(Math.floor(4.6));// lowest of value
// console.log(Math.min(4.6,5,6,23,));// lowest of value of array
 console.log(Math.random());// always value 0 to 1
 console.log((Math.random()*10) + 1);// +1 gaurentees the value will not be zero 
 console.log(Math.floor(Math.random()*10) + 1); // we can also use floor method.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) ))// without adding minimum.it will give value less than minimum value 
console.log(Math.floor(Math.random() * (max - min + 1) )+ min)// Hence we have to add min value to avoid that situation.

