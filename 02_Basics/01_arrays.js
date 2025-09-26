//Arrays


const myArr = [1, 2, 3, 4, 5];
const myHeroes = ['shaktiman', 'nagraj', 'doga', 'batman'];

const myArr2 = new Array(1, 4, 3, 8);
//console.log(myArr[3]);

//myArr.push(6); //add 6 at the end of the array
//myArr.push(9)
//myArr.unshift(8) // unshift add element at the beginning of the array and increase complition time

// console.log(myArr.includes(8)); //return true or false
// console.log(myArr.indexOf(3));


//console.log(myArr);

// slice , splice

console.log("A ", myArr);

const myArr3 = myArr.slice(1, 4); // does not change the original array
console.log(myArr3);
console.log("B ", myArr);


const myArr4 = myArr.splice(1, 4); // changes the original array
console.log("C ", myArr);
console.log("D ", myArr4);

