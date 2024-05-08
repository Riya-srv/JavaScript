const score = 100;
//console.log(score); //100

const balance = new Number(100)
//console.log(balance); // [Number: 100]

console.log(balance.toString().length); //3

console.log(balance.toFixed(2)) //100.00

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(3)) //123.9

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000


// ==================== MATHS =====================

console.log(Math) //Object [Math] {}

console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.min(3,2,5,4)) //2

console.log(Math.random()) //value will always be b/w 0 and 1
console.log((Math.random()*10)+1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1)) + min)









