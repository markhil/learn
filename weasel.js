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
	var newFit = 0;
	var fittest;
	for (var i = 0; i < 50; i++) {
		var current = getFitness(pool[i]);
		if (current > newFit) {
			newFit = current;
			fittest = pool[i];
		}
	}
	return fittest;
}

// Generate genome
var genome = generateGenome();
var pool = getGenePool(genome);
getFittest(pool);



