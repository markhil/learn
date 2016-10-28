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
// Closure - function and environment in which it was created
function nested() {
	var name = "Closure";
	// var name accessible in nested function
	function displayName() {
		console.log(name);
	}
	// returns value of closure
	// usually values in function only exist as long as the function runs
	return displayName;
}

var nestedFunc = nested();
nestedFunc();


// Closure II
function addition(x) {
	return function(y) {
		return x + y
	};
}
// Addition is a function factory
var add5 = addition(5);
console.log(add5(2));

var add10 = addition(10);
console.log(add10(42));


/* Modules
=======================================================*/
// Modules allow definition of private implementation details (variables, functions)
function User() {
	// User function serves as outer scope that holds variables & doLogin func
	var username;
	var password;
	function doLogin(user, pw) {
		username = username;
		password = pw;
		// rest of login work
	}
	var publicAPI = {
		// References function above
		login: doLogin
	};
	return publicAPI;
}
// User is function; not class to be instantiated, not new Class();
// Executing User(); creates instance of User module.
var me = User();

me.login("username123", "passWord!123");

/* this Identifier
=======================================================*/
// this does not refer to function itself
// Which object it points to depends on how function was called

function foo() {
	console.log(this.bar);
}

var bar = "global";

var obj1 = {
	bar: "obj1",
	foo: foo
};

var obj2 = {
	bar: "obj2"
};

foo(); // global
obj1.foo(); // Points to obj1
foo.call(obj2); // Points to obj2
new foo(); // Undefined



