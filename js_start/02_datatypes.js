let name = "Abhinash" //string
let age = 21; //number
let isLoggedIn = false; //boolean
let state; //undefined
let country = null; //null



//Number => 2 to the power of 53
//bigInt => larger than 2 to the power of 53
//String => ""   sequence of characters
//Boolean => true/false
//null => standalone value
//undefined => variable not assigned a value
//object => key value pairs
//symbol => unique identifiers


//console.log(typeof undefined);

//data types are two types
//1. Primitive data types
//2. Reference data types


//Primitive data types = 7
// number, string, boolean, null, undefined, symbol, bigint

const score = 100; // number
const scoreValue = 100.5; // number

// const isLoggedIn = false; //boolean
const outsideTemp = null;
let userEmail; //undefined

const id = Symbol('258');
const anotherId = Symbol('258');

console.log(id === anotherId); // false

const bigNumber = 3456789012345678901234567890n;

//Reference(non-primitive) data types = 1
// object
// Array
// function

//object
let person = {
	name: "Abhinash",
	age: 21,
	isLoggedIn: false
};
//console.log(typeof person);
//console.log(person);

//Array
let heroes = ["Shaktiman", "Naagraj", "Doga", 45, null, undefined, false];
let myObj = {
	name: "Abhinash",
	age: 21,
};
const myfunction = function () {
	console.log("Hello World");
}

console.log(typeof myfunction);


// types of value and result

//undefined => undefined
//null => object
//boolean => true/false
//number => number
//string => string
//bigint => bigint
//symbol => symbol
//object => object
//array => object
//function => function