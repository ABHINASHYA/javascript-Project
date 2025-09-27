//singleton

//const tinderUser = new Object()  //singleton object
const tinderUser = {} //non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Abhinash"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
	email: "regular@example.com",
	fullName: {
		userFullName: {
			firstName: "Abhinash",
			lastName: "Kumar"
		}
	}
}

//console.log(regularUser.fullName.userFullName);

const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "c", 4: "d" }


//const obj3 = Object.assign({}, obj1, obj2) //merging multiple objects
const obj3 = { ...obj1, ...obj2 } //spread operator
//console.log(obj3);

const users = [
	{
		id: 1,
		email: "user1@example.com"
	},
	{
		id: 2,
		email: "user2@example.com"
	},
	{
		id: 3,
		email: "user3@example.com"
	},
	{
		id: 4,
		email: "user4@example.com"
	}
]


users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));//gives only keys in form of array
console.log(Object.values(tinderUser));//gives only values in form of array
console.log(Object.entries(tinderUser)); //gives key value pair in form of array of arrays
// 
console.log(tinderUser.hasOwnProperty("isLoggedIn")); //to check if the property is present in the object or not




