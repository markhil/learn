// Modulo practice
// Divisible by 3?
/*

var num = 420;
var div = 2;

if (num % div === 0) {
	console.log(num + " is divisible by " + div);
}
else {
	console.log(num + " is not divisible by " + div);
}


// substring
console.log("Count".substring(3,4)); // up to not including


// Function practice
var printName = function(name) {
	console.log(name);
}

printName("Mark");


var printNameLength = function(name) {
	var nameLength = name.length;
	console.log(nameLength);
}

printNameLength("Aleksander");

// Two parameter function
var calculate = function(number1, number2) {
	var result = number1 + number2;
	console.log(result);
}

calculate(3,10);

// Return in function
var timesTwo = function(number3) {
	return number3 * 2;
}

var newNumber = timesTwo(5);

console.log(newNumber);


// For loops: from, to, increments i++ === i = i + 1
for (var counter =1; counter < 11; counter++) {
	console.log(counter);
}

// For in larger increments
for (var i = 1; i < 100; i = i + 5) {
	if (i % 2 === 0) {
		console.log('Even: ' + i);
	}
	else {
		console.log('Odd: ' + i);
	}
}

// Count down
for (var i = 100; i >= 0; i-= 5) {
	console.log(i);
}

// For loop through string
var newText = "Acquisition of Fastmarkets";

for (var i = 0; i <= newText.length; i++) {
	console.log(newText[i]);
}

// Text search
var text = "Java java java java look see Mark see Mark stuck for declaring want see Mark";

var myName = "Mark";

var hits = [];

for (var i = 0; i <= text.length; i++) {
    if (text[i] === myName.substring(0,1)) {
        for (j = i; j <= (i + myName.length); j++) {
            hits.push(text[j]);
        }        
    }
}

if (hits.length === 0) {
    console.log("Your name wasn't found");
}
else
{
    console.log(hits);
}

// While loop
var newCondition = 10;

while (newCondition) {
	console.log("While loop running");
	var newCondition = newCondition - 1;
}

console.log("While loop stopped");


// While loop in function

var loop = function(number4) {
	while(number4) {
		console.log("Function loop running");
		var number4 = number4 - 1;
	}
}

loop(4);


// Do / While

var loopCondition = false;

do {
	console.log("While loop running");
} while (loopCondition);


// Do / While in function
var whileLoop = function(num) {
	do {
		console.log("whileLoop");
	} while(num);
};

whileLoop(0);


// Target game

var finalScore = true;
var youScored = Math.floor(Math.random() * 2);
var scoreThisRound = Math.floor(Math.random() * 5 + 1);
var totalScore = 0;

while(finalScore) {
	if(youScored) {
		console.log("You scored " + youScored);
		var totalScore = scoreThisRound + totalScore;
		if(totalScore >= 40) {
			console.log("You won the game");
			var finalScore = false;
		}
		else {
			var youScored = Math.floor(Math.random() * 2);
		}
	}
	else {
		console.log("Defeated");
	}
	var finalScore = false;

}



// Switch

// Prompt user input, example pick from array

var fruitArray = ['apple', 'banana', 'orange', 'placeholder'];
var fruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];

switch(fruit) {
	case 'apple':
		console.log('You chose: ' + fruit);
		break;
	case 'banana':
		console.log('You chose: ' + fruit);
		break;
	case 'orange':
		console.log('You chose: ' + fruit);
		break;
	default:
		console.log(fruit + " is not a fruit");
		break;
}


// Interval switch case

var fruitArray = ['apple', 'banana', 'orange', 'placeholder'];

setInterval(function(){
	var fruit = fruitArray[Math.floor(Math.random() * fruitArray.length)];
	switch(fruit) {
		case 'apple':
			console.log('You chose: ' + fruit);
			break;
		case 'banana':
			console.log('You chose: ' + fruit);
			break;
		case 'orange':
			console.log('You chose: ' + fruit);
			break;
		default:
			console.log(fruit + " is not a fruit");
			break;
	}	
}, 100);


// FizzBuzz programme

for (var i = 0; i <= 20; i++) {
	if ((i % 5 === 0) && (i % 3 === 0)) {
		console.log(i + " is divisible by five and three");
	}
	else if (i % 5 === 0) {
		console.log(i + " is divisible by five");
	}
	else if (i % 3 === 0) {
		console.log(i + " is divisible by three");
	}
	else {
		console.log(i + " is not divisible by five or three");
	}
}




// Sides array
var sides = [3, 4, 5, 6];

// Perimeter calculator function
var calcPerimeter = function(x, y) {
	var x = sides[Math.floor(Math.random() * sides.length)];
	var y = sides[Math.floor(Math.random() * sides.length)];
	var perimeter = (x + y) * 2;
	console.log(perimeter)
}

calcPerimeter();


// Area calculator function
var calcArea = function(x, y) {
	var x = sides[Math.floor(Math.random() * sides.length)];
	var y = sides[Math.floor(Math.random() * sides.length)];
	if (x === y) {
		var sqArea = Math.pow(x, 2);
		console.log("Square: " + sqArea);
	}
	else {
		var rArea = x * y;
		console.log("Rectangle: " + rArea);
	}	
}

calcArea();



// Constructors

function Match(name, age) {
	this.name = name;
	this.age = age;
}

var tinder = new Match("Tinder Match", 30);

console.log(tinder);



// Perimeter and area calculator object constructor



function Shape(height, width) {
	this.height = height;
	this.width = width;
	this.calcArea = function() {
		var area = this.height * this.width;
		console.log(area);
	};
	this.calcPerimeter = function() {
		var perimeter = (this.height + this.width) * 2;
		console.log(perimeter);
	};
};

var rectangle = new Shape(5, 12);
var rectangleArea = rectangle.calcArea();
var rectanglePerimeter = rectangle.calcPerimeter();


// Array of objects

function Film(name, rating) {
	this.name = name;
	this.rating = rating;
}

var cinema = new Array();

cinema[0] = new Film("Jaws", 8);
cinema[1] = new Film("If....", 10);

for (var i = 0; i <= cinema.length; i++) {
	console.log(cinema[i]);
}



// Passing objects into functions

function Mountain(name, height) {
	this.name = name;
	this.height = height;
}

var heightDifference = function(mt1, mt2) {
	var diff = mt1.height - mt2.height;
	console.log(diff);
}

var mount1 = new Mountain("Mount1", 200);
var mount2 = new Mountain("Mount2", 100);

heightDifference(mount1, mount2);



// Circle

function Circle(radius) {
	this.radius = radius;
	this.area = function() {
		var area = Math.PI * Math.pow(radius, 2);
		console.log(area)
	}
	this.perimeter = function() {
		var perimeter = 2 * Math.PI * this.radius;
		console.log(perimeter);
	}
}

var circ = new Circle(2.5);
var circArea = circ.area;

// ??????????????//




// Methods (functions in objects) practice

function someObject() {
	this.someMethod = function() {
		console.log("Some method of some object called");
	}
}

var someVariable = new someObject();
someVariable.someMethod();



// Methods practice, literal construction

var person = {
	human: true,
	speak: function(greeting) {
		console.log(greeting + ", World!");
	}
}

person.speak("Hello");




// Object, method, reference

var employee = {
	job: "developer",
	sayJob: function() {
		console.log("I work as a " + this.job);
	}
}

employee.sayJob();


// Property values, bracket notation

var user = {
	job: "programmer"
}

var newProp = "job";

console.log(user[newProp]);



// typeof

var typesArray = [2, {human: false}, "Hello, World"];

for (var i = 0; i <= typesArray.length; i++) {
	console.log(typeof typesArray[i]);
}



// hasOwnProperty

var myObj = {
	name: "Mark"
}

console.log(myObj.hasOwnProperty('name'));
console.log(myObj.hasOwnProperty('job'));


// More hasOwnProperty

var job = {
	location: "London"
};

if (job.hasOwnProperty('salary')) {
	console.log(job.salary);
} else {
	job.salary = "Undisclosed";
	console.log(job.salary);
};




// Loop through object: keys, value

var city = {
	name: "London",
	country: "England",
	population: 100000000
}

for (var key in city) {
	console.log(key);
}

for (var value in city) {
	console.log(city[value]);
}



// OOP - Classes

function CircleClass(radius) {
	this.radius = radius
};



// More classes

function Character(name) {
	this.name = name;
};

var printCharacter = function(p) {
	console.log(p.name);
};

var me = new Character("Mark");

printCharacter(me);


// Extending the prototype - add method by prototype, adds method to all instances of class

function Slice(brand) {
	this.brand = brand;
}

var sainos = new Slice("Sainos");

Slice.prototype.rating = function() {
	console.log("7/10");
};

sainos.rating();

var mands = new Slice("M&S");
mands.rating();



// Inheritance with prototypes

function Friend(name) {
	this.name = name;
};

Friend.prototype.sayName = function() {
	console.log("Hello, " + this.name);
};


var oskar = new Friend("Oskar");
oskar.sayName();


// Inheriting from class

function Animal(species, numLegs) {
	this.species = species;
	this.numLegs = numLegs;
};

Animal.prototype.saySpecies = function() {
	console.log("This animal belongs to " + this.species + " species");
};

function Dog() {
	this.species = "canine";
	this.numLegs = 4;
}

Dog.prototype = new Animal();

var oskar = new Dog();

oskar.saySpecies();



// Class inheritance II

function Dog(species, numLegs) {
	this.species = "canine";
	this.numLegs = 4
};

function Whippet(breed, speed) {
	this.breed = "Whippet";
	this.speed = "Fast";
};

Whippet.prototype = new Dog();

var oskar = new Whippet();
console.log(oskar.species + ", " + oskar.numLegs);


// Class Inheritance III


function Food(edible) {
	this.edible = true;
};

function Fruit(plant) {
	this.plant = true;
};

function Banana(color) {
	this.color = "yellow";
};

Fruit.prototype = new Food();
Banana.prototype = new Fruit();

var delmonte = new Banana();

console.log(delmonte.edible + ", " + delmonte.plant + ", " + delmonte.color);




// Private variables

function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	var bankBalance = 2000;
}

var me = new Person("Mark", "Aleksander", 29);

console.log(me.bankBalance); // Returns undefined



// Accessing private variables via method

function Person(name) {
	this.name = name;
	var balance = 2000;
	this.getBalance = function() {
		return balance;
	};
};

var me = new Person("Mark");
console.log(me.getBalance()); // returns balance;

// Private methods, arguments



function Person(name) {
	this.name = name;
	var balance = 100;
	this.password = function(pass) {
		if (pass == 1234) {
			console.log(balance);
		} else {
			console.log("Incorrect password. Try again.");
		};

	};
};

var me = new Person("Mark");
var myBalance = me.password(12222234);



// More objects/iteration

var languages = {
	english: "Hello",
	french: "Bonjour",
	notLang: 0,
	spanish: "Hola",
};

for (var x in languages) {
	if (typeof languages[x] === "string") {
		console.log(languages[x]);
	} else if (typeof languages[x] === "number") {
		console.log(x + " is a number");
	};
};





// Objects, prototypes, properties

var prototypeType = typeof Object.prototype;
console.log(prototypeType);

var hasOwn = Object.prototype.hasOwnProperty("hasOwnProperty");
console.log(hasOwn);

*/


// Private and Public properties - function is public but grades are private

function Report() {
	var grade1 = 5;
	var grade2 = 4;
	var grade3 = 2;
	this.getGPA = function() {
		return ((grade1 + grade2 + grade3) / 3).toFixed(2); //  to 2 places
	};
};

var myReport = new Report();

console.log(myReport.getGPA());




