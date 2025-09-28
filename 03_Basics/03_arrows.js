const user = {
	username: "Abhinash",
	price: 999,

	welcomeMessage: function () {
		console.log(`${this.username}, welcome to website`)
		console.log(this);

	}
}


// user.welcomeMessage()
// user.username = "New User"
// user.welcomeMessage()


//console.log(this);

// function js() {
// 	console.log(this);

// }

// js()

// function js() {
// 	let username = "Abhinash"
// 	console.log(this.username);

// }
// js()

// Arrow function
// Arrow functions do not have their own 'this' context; they inherit 'this' from the surrounding lexical scope.
// const js = () => {
// 	let username = "Abhinash"
// 	console.log(this.username);
// const js = () => {
// 	console.log(this);

// }
// js()

// const addTwo = (num1, num2) => {  
// 	return num1 + num2
//}

// Implicit return

// const addTwo = (num1, num2) => num1 + num2  //
// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "Abhinash" })

console.log(addTwo(5, 10));


