// Immediately Invoked Function Expression (IIFE)

(function js() {
	console.log('DB Connected');
})(); //; used to terminate statements in JS

//()()
// what is the use of IIFE?
// 1. To avoid polluting the global scope
// 2. To create a private scope for variables and functions
// 3. To execute code immediately without having to call it separately
// 4. To create a module pattern
// 5. To encapsulate code and avoid conflicts with other scripts


(function aura() {
	//named iife
	console.log('aura');

})();

((name) => {
	console.log(`DB Connected To ${name}`);

})('Abhinash');


