const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber = 123.123456;
console.log(otherNumber.toPrecision(4));

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); // "1,000,000" in the US, "1.000.000" in Germany, etc.
console.log(hundreds.toLocaleString("en-IN"));// "10,00,000" in India


/// ***************** Maths ***************

console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(4.6)); //round to nearest whole number
console.log(Math.abs(-42)); //absolute value
console.log(Math.ceil(4.2)); //ceil means round up
console.log(Math.floor(4.9)); //floor means round down
console.log(Math.sqrt(64)); //square root
console.log(Math.min(3, 5, 1, 8, 2)); //minimum value
console.log(Math.max(3, 5, 1, 8, 2));

console.log(Math.random()); //random number between 0 and 1
console.log(Math.floor(Math.random() * 10) + 1); //random number between 0 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random number between min and max (inclusive)



