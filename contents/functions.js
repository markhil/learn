/* Functions
=======================================================*/
// Function with operator
var multiply = function(n) {
	return n * n;
}

console.log(multiply(2));


// Immediately Invoked Function Expressions
(function immediate() {
	console.log("Immediately Invoked Function Expressions");
})();


// IIFE with return value
var y = (function(){
	return 5;
})();

console.log(y);


// IIFE with return value
var x = (function IIFE() {
	return Math.pow(2,3);
})();

console.log(x);


/* Closures
=======================================================*/
