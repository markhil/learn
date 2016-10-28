// Weasel genetic algorithm
//======================================================//
var TARGET = "METHINKS IT IS LIKE A WEASEL";
var ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";
var MUT_PROB = 10;

// Generate Genome function
function generateGenome() {
	var genome = [];
	for (var i = 0; i < 28; i++) {
		genome[i] = ALPHABET[Math.floor(Math.random() * ALPHABET.length)]; // Random string gnerator
	}
	return genome.join(""); // Joins array to string
//	console.log(genome.join(""));
};

// Fitness function
function getFitness(genome) {
	var fitness = 0;
	for (var i = 0; i < genome.length; i++) {
		if (genome[i] === TARGET[i]) {
			fitness++;
		}
	}
	return fitness;
};

// Get gene pool
function getGenePool(genome) {
	var pool = [];
	for (var i = 0; i < 50; i++) {
		pool[i] = genome;
		genome = generateGenome();
	}
	return pool;
};

// Get fittest
function getFittest(pool) {
	var fittestLoc = 0;
	var fittest;
	for (var i = 0; i < 50; i++) {
		var current = getFitness(pool[i]);
		if (getFitness(pool[i]) > fittest) {
			fittest = getFitness(pool[i]);
			fittestLoc = i;
		}
	}
	return fittest;
}

// Mutation function
function doMutation(genome) {
	var newGenome = "";
	for (i = 0; i < genome.length; i++) {
		if (Math.floor(Math.random() * MUT_PROB) === 1) {
			if (genome[i] != TARGET[i]) {
				newGenome += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
			} else {
				newGenome += genome[i];
			}
		} else {
			newGenome += genome[i];
		}
	}
	return newGenome;
}

function evolve() {
	var n = 0;
	var fittest = generateGenome();
	console.log(fittest);
	while(getFitness(fittest) !== 28) {
		n++;
		var pool = getGenePool(fittest);
		var newPool = [];
		for (var i = 0; i < pool.length; i++) {
			newPool[i] = doMutation(pool[i]);
		}
		fittest = getFittest(newPool);
		if (n % 10 === 0) {
			console.log(fittest);
		}
	}
	return fittest;
}




evolve();

// Generate genome
var genome = generateGenome();
var pool = getGenePool(genome);
getFittest(pool);



