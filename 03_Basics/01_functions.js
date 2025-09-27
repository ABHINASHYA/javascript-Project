

function sayMyName() {
	console.log("A");
	console.log("B");
	console.log("H");
	console.log("I");
}

//sayMyName()

// function addTwoNumbers(num1, num2) {
// 	console.log(num1 + num2);
// }
// addTwoNumbers(4, 5);
// addTwoNumbers("1", 2);
// addTwoNumbers("Hello", "World");


function addTwoNumbers(num1, num2) {
	// let result = num1 + num2;
	// return result;
	// console.log("Hello World");
	return num1 + num2;

}

const result = addTwoNumbers(4, 5);
//console.log("Result: ", result);

function loginUserMessage(username = "sam") {
	if (username === undefined) {
		console.log("Please enter a username");
	}
	return `${username} just logged in`;
}

//console.log(loginUserMessage("Abhinash"));
//console.log(loginUserMessage());

//function calculateCartPrice(...num) {
function calculateCartPrice(val1, val2, ...num) { //val1 and val2 not part of rest parameter
	return num;
}

//console.log(calculateCartPrice(20, 54, 81, 75, 65));

const user = {
	username: "Abhinash",
	price: 500
};

function handleObject(anyobj) {
	console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

//handleObject(user);

handleObject({
	username: "Sam",
	price: 100
})

const myNewArray = [1, 2, 3, 4, 5, 6];

function returnSecondValue(getArray) {
	return getArray[5];
}

console.log(returnSecondValue(myNewArray));

