/* If
=======================================================*/
// Basic syntax
var a = false;
if (a == false) {
// do	console.log("A is false");
} else {
// do	console.log("A is true");
}

// Else if, check value without allowing type coercion

var b = "2";
if (b === 2) {
	console.log("b = 2");
} else if(b == 2) {
	console.log("b = 2 with coercion");
}
else {
	console.log("Inequality");
}

/* Switch
=======================================================*/
// Switch case
var c = 5;
switch (c) {
	case 3:
		console.log(3);
		break;
	case 4:
		console.log(4);
		break;
	case 5:
		// Becase c = 5, this code will run
		console.log(5);
		break;
	default:
		console.log("No cases met");
}

// Switch case with "fall through"
var d = 10;
switch (d) {
	case 10: 
		console.log(10);
		// Fall through
	case 100:
		console.log("Next case fall through");
		break;
	default:
		console.log("No cases met");		
}


/* Ternary operator
=======================================================*/
// One line if...
var e = 42;
var f = (a > 2) ? "hello" : "world";
console.log(f);

/* Concise version of following statement
if (a > 2) {
	console.log("hello")
} else {
	console.log("world")
}
*/

// Also possible to deep nest ternary operators, but why would you.