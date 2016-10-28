/* Generator
- Gene object has two functions:
	- "create" returns new gene
	- "mutate(existingGene)" returns mutation of existing gene
============================================================*/
// Generator object
function Generator(length, mutationRate, geneStrategy) {
	this.size = length;
	this.mutationRate = mutationRate;
	this.geneStrategy = geneStrategy;
}


// Expand Generator object
Generator.prototype.spawn = function() {
	var genes = [];
	var x;
	for (x = 0; x < this.size; x +=1) {
		genes.push(this.geneStrategy.create());
	}
}

// Mutate method of Generator object
Generator.prototype.mutate = function(parent) {
	return parent.map(function(char) {
		if (Math.random() > this.mutationRate) {
			return char;
		}
		return this.geneStrategy.mutate(char);
	}, this);
};


/* Population
- Holds and spawns new population
============================================================*/

function Population(size, generator) {
	this.size = size;
	this.generator = generator;
	this.population = [];
	// Build initial population
	for (var i = 0; i < this.size; i += 1) {
		this.population.push(this.generator.spawn());
	}
}

// Extend Population with spawn method
Population.prototype.spawn = function(parent) {
	this.population = [];
	for (var i = 0; i < this.size; i += 1) {
		this.population.push(this.generator.mutate(parent));
	}
}
