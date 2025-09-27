//var c = 50;

let a = 100;

if (true) {
	let a = 10;
	const b = 20;
	//console.log("Inner a is: ", a);

}

for (let a = 0; a < 10; a++) {
	//console.log(a);
}
//console.log(a);
// console.log(b);
//console.log(c);



function one() {
	const username = "Abhinash";
	function two() {
		const website = "www.google.com";
		console.log(username);
	}
	two();
}

//one();

if (true) {
	const username = "Abhinash ";
	if (username === "Abhinash ") {
		const website = " www.google.com";
		//console.log(username + website);
	}
	//console.log(website);
}
//console.log(username);


//********************Interesting********************//

console.log(addOne(5));

function addOne(num) {
	return num + 1
}

addOne(8)

constaddTwo = function (num) {
	return num + 2
}

//addTwo(8)
