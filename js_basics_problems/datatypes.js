const kilometer = 10 ;

const kilometerToMeter = (kilometer)=>{
    return kilometer*1000
}

const kilometerToCentimeter = (kilometer)=>{
    return kilometer*100000
}
console.log(`Kilometer to meter: ${kilometerToMeter(kilometer)}`)
console.log(`Kilometer to Centimeter: ${kilometerToCentimeter(kilometer)}`)


const radius = 5;
const pi = Math.PI
const areaOfCircle = (radius,pi)=>{
    return pi  * radius;
}

console.log(`Area of circle : ${areaOfCircle(radius,pi)}`)

const a = 10
const b = 20

const addition = (a ,b)=>{
    return a+b
}
const subtraction = (a ,b)=>{
    return a-b
}
const multiplication = (a ,b)=>{
    return a*b
}
const division = (a ,b)=>{
    return a/b
}
console.log(`Addition: ${addition(a,b)}`)
console.log(`Subtaction: ${subtraction(a,b)}`)
console.log(`Multiplication: ${multiplication(a,b)}`)
console.log(`Division: ${division(a,b)}`)

const subjectOne = 87;
const subjectTwo = 76;


const totalMarks = (subjectOne,subjectTwo)=>{
    return subjectOne+subjectTwo;
}

const percentage = (a,b)=>{
    return (a,b/200)*100
}

console.log(`Total Marks : ${totalMarks(subjectOne,subjectTwo)}`);
console.log(`Percentage: ${percentage(subjectOne,subjectTwo)}`);


const length = 10
const breadth = 20

const area = (length,breadth)=>{
    return length*breadth;
}
const perimeter =(length,breadth)=>{
    return 2*(length+breadth)
}
console.log(`area of rectangle: ${area(length,breadth)}`);
console.log(`perimeter of rectangle: ${perimeter(length,breadth)}`);

const numbers = [1,2,3,4,5]

const average = (numbers)=>{
    let sum = 0;
    numbers.forEach(num => {
        sum+= num;
    });
    return sum/numbers.length

}
console.log(`average of numbers: ${average(numbers)}`)

const distanceBetweenTwoCities = 100;

const meters = (distance)=>{
    return distance*1000
}
const feet = (distance)=>{
    return distance*3280.84
}
const inches = (distance)=>{
    return distance*39370.1
}
const centimeters = (distance)=>{
    return distance*100000
}

console.log(`distance in meters : ${meters(distanceBetweenTwoCities)}`)
console.log(`distance in feet : ${feet(distanceBetweenTwoCities)}`)
console.log(`distance in inches : ${inches(distanceBetweenTwoCities)}`)
console.log(`distance in centimeters : ${centimeters(distanceBetweenTwoCities)}`)

const temperatureInFahrenheit = 100;

const convertToCelsius = (temperature)=>{
    return (temperature -32)*5/9;
}
console.log(`Temperature in Celsius ${convertToCelsius(temperatureInFahrenheit)}`);

const quantity = 5
const rate = 100

const calculateAmount =(a,b)=>{
    return a*b;
}
const discountAmount = (a,b)=>{
    return calculateAmount(a,b)*10/100
}
const amountAfterDiscount= (a,b)=>{
    return calculateAmount(a,b)-discountAmount(a,b)
}

console.log(`Amount of product: ${calculateAmount(quantity,rate)}`)
console.log(`discount on product: ${discountAmount(quantity,rate)}`)
console.log(`Amount of product after discount: ${amountAfterDiscount(quantity,rate)}`)

const principleAmount  = 100
const interest = 10;
const years = 5;

const simpleInterest = (a,b,c)=>{
    return a*b*c/100;
}

console.log(`Simple Interest : ${simpleInterest(principleAmount,interest,years)}`)

