var readlineSync = require('readline-sync');

function Student() {
	this.name = null;
	this.idNum = null;
	this.gender = null;
}

Student.prototype.ask = function() {
	this.name = readlineSync.question('Student name: ');
	this.idNum = readlineSync.question('ID: ');
	this.gender = readlineSync.question('Gender: ');
};

Student.prototype.averageScore = function() {
	this.score = 10;
};

module.exports = Student;