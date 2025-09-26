let date = new Date();
//console.log(date); // current date and time

console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

//let myCreatedDate = new Date(2025, 0, 1, 10, 30, 25); // year, month (0-indexed), day, hours, minutes, seconds
//let myCreatedDate = new Date("2025-01-01");
let myCreatedDate = new Date("09-26-2025");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
console.log(newDate.getFullYear());

newDate.toLocaleString('default', {
	weekday: 'long'
});
