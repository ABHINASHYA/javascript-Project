const name = "Abhinash"
const repoCount = 50

//console.log(name + repoCount);

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const getName = new String("Abhinash");

console.log(getName[0]);
console.log(getName.__proto__);
console.log(getName.length);
console.log(getName.toUpperCase()); // it will not change original value of getName
// console.log(getName.charAt(2));
// console.log(getName.indexOf("n"));

const newString = getName.substring(0, 4); // it will not change original value of getName
//console.log(newString);

const anotherString = getName.slice(-8, 5);//
console.log(anotherString);

const newStringOne = "   Abhinash   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //trim method will remove extra spaces from both sides

const url1 = "https://www.google.com/search?q=javascript+string+methods&rlz=1C1GCEU_enIN1046IN1046&oq=javascript+string+methods&aqs=chrome..69i57j0i512l9.5244j0j7&sourceid=chrome&ie=UTF-8";

const url = "https://www.abhinash.com/Abhi%20Yadav";

console.log(url.replace('%20', '-')); // it will replace first occurrence of %20 with -

console.log(url.includes('abhi')); // it will return boolean value
console.log(getName.split('-'));










