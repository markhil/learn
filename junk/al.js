/* Is n Fibonacci number?
===============================================*/
/* Function
function fib(n) {
	return ((Math.sqrt(5 * (Math.pow(n, 2) + 4))) % 1 === 0) || ((Math.sqrt(5 * (Math.pow(n, 2) - 4))) % 1 === 0);
}
// Invoke function and log to console
console.log(fib(5));
*/

var n = 3;
var first = 5 * (Math.pow(n, 2)) + 4;
var firstSq = Math.sqrt(first);
var fisq = firstSq % 1 === 0;
console.log(first + " " + firstSq + " " + fisq);

// Refactor
function Fib(n) {
	this.first = 5 * (Math.pow(n, 2)) + 4;
	this.second = 5 * (Math.pow(n, 2)) - 4;
	// If square should return true if either first or second return true
	this.isSquare = function() {
		return this.first;
	}
}

var num = new Fib(3);
console.log(num.isSquare);


/* Is n in sequence Fibonacci number?
===============================================*/
/* Loop
for (var i = 0; i < 50; i++) {
	// If fib(n) === true
	if (fib(i) === true) {
		console.log(i);
	}
}
*/















/* Refactor
===============================================*/