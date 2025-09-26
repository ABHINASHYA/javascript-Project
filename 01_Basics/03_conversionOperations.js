let score = "33jhufh";

//console.log(typeof score);
//console.log(typeof (score));

let valueInNumber = Number(score);

//console.log(typeof valueInNumber);
//console.log(valueInNumber);

// NaN - not a number
// "33" => 33
// "33abc" => NaN
// true => 1 , false => 0
// null => 0
// undefined => NaN


let isloggedIn = "true";
let booleanIsloggedIn = Boolean(isloggedIn);
//console.log(booleanIsloggedIn);


//1 => true
//0 => false
// "abc" => true
// "" => false
// null => false
// undefined => false

let someNumber = 33;

let stringNumber = String(someNumber);
//console.log(stringNumber);
//console.log(typeof stringNumber);

// "33"



// *******************************************Operations********************************************

let value = 65;
let negValue = -value; // unary operator
//console.log(negValue);

//console.log(2 + 3); //5  (binary operator)
//console.log(2 - 3); // -1
//console.log(2 * 3); // 6
//console.log(2 / 3); // 0.6666
//console.log(2 % 3); // 2	
//console.log(2 ** 3); // 8


let str1 = "Hello ";
let str2 = "World";
let str3 = str1 + str2;
//console.log(str3);


// console.log("2" + 3); // "23"
// console.log(2 + "3"); // "23"
// console.log("2" + "3"); // "23"	
// console.log("2" + 3 + 4); // "234"
// console.log(2 + 3 + "4"); // "54"
// console.log("Hello " + 3); // "Hello 3"
// console.log("Hello " + true);



// console.log(true);
// console.log(false);
// console.log(+true); // 1
// console.log(+ ""); // 0


let num1, num2, num3
num1 = num2 = num3 = 2 + 3 * 4;
//console.log(num1, num2, num3); // 14 14 14

let gameCounter = 100;
gameCounter++;
++gameCounter;
console.log(gameCounter);


