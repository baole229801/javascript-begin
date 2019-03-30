var readlineSync = require('readline-sync');

function Pet() {
	this.name = null;
	this.gender = null;
	this.weight = null;
};
Pet.prototype.ask = function() {
	this.name = readlineSync.question("What is pet's name? ");
	this.gender = readlineSync.question("What is pet's gender? ");
	this.weight = readlineSync.question("What is pet's weight? ");
};

module.exports = Pet;
