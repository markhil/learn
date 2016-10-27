/* For
=======================================================*/
// Count from 1 to 10 upwards
console.log("First loop.");
for (var i = 1; i < 11; i++) {
	console.log(i);
}

// Count from 100 to 0 downwards in increments of 5
console.log("Second loop");
for (var i = 100; i > 0; i = i - 5) {
	console.log(i);
}

// Print only multiples of 3 from 0 to 30
console.log("Third loop.")
for (var i = 0; i < 30; i++) {
	if (i % 3 === 0) {
		console.log(i);
	}
}

// Print only multiples of 4 from 0 to 1000 which are also square numbers
console.log("Fourth loop.");
for (var i = 0; i < 1000; i++) {
	if (i % 4 === 0) {
		if (Math.sqrt(i) % 1 === 0) {
			console.log("Square of " + i + " is " + Math.sqrt(i));
		}
	}
}
// !! Refactor last loop !!

// Print out only power of two numbers from 1 to 2000;
// Two to the power of n where n is an integer
console.log("Fifth loop.");
for (var i = 0; i < 20; i++) {
	console.log(Math.pow(2, i));
}

/* While
=======================================================*/
// Basic while
console.log("First while.");
var condition = 0;
while (condition < 10) {
	console.log(condition);
	condition++;
}

// !! Add more examples !!

/* While
=======================================================*/
// Basic do... while
console.log("First do... while");
var numItems = 10;
do {
	console.log(numItems + " items remaining")
	numItems -= 1;
} while(numItems > 0)

// !! Add more examples !!
