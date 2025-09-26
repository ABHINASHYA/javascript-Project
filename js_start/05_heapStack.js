// Stack(primitives) 
// it is used for static memory allocation
// it is faster than heap
// it is used for storing primitive data types
// it is used for storing function calls
//---it is use copy of value
//---it is stored in stack memory

let myCollege = "RungtaCollege";
let anotherCollege = myCollege;
anotherCollege = "IIT";
// Here, myCollege is still "RungtaCollege", while anotherCollege is now "IIT"

console.log(myCollege);
console.log(anotherCollege);

// Heap (non-primitives)
// it is used for dynamic memory allocation
// it is slower than stack
// it is used for storing non-primitive data types
// it is used for storing objects
//---it is stored in heap memory
//---it is use reference of value

let userOne = {
	email: "userone@example.com",
	upi: "userone@bank"
}

let userTwo = userOne
userTwo.email = "usertwo@example.com"

console.log(userOne);
console.log(userTwo);

// In this case, both userOne and userTwo reference the same object in memory.
// Therefore, changing the email property through userTwo also affects userOne.

