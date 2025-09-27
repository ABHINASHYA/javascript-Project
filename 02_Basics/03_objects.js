// singleton means only one instance of the object can exist

//object literal syntax

const mySym = Symbol("key1");

const jsUser = {
	name: "Abhinash",
	"full name": "Abhinash Kumar",
	[mySym]: "value1",
	age: 21,
	location: "India",
	email: "abhinash@example.com",
	isLoggedIn: false,
	lastLoginDays: ["Monday", "Friday"],
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser["mySym"]);
// console.log(typeof jsUser.mySym);

jsUser.email = "abhinash.kumar@example.com";
//Object.freeze(jsUser); // prevent modification of the object
jsUser.email = "abhinash.kumar@newdomain.com"; // This will not change the email
//console.log(jsUser);

jsUser.greeting = function () {
	console.log("Hello JS User");
}

jsUser.greetingTwo = function () {
	console.log(`Hello JS User, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

