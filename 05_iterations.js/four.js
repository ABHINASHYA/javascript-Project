
const myObject = {
	js: 'javascript',
	cpp: 'c++',
	rb: "ruby",
	swift: "swift by apple"
}

for (const key in myObject) {   ///for in
	console.log(`${key} shortcut is for ${myObject[key]}`);

}

const programming = ["js", "cpp", "py", "java", "ruby"]

for (const key in programming) {
	console.log(key);

}