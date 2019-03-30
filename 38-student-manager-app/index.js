var readlineSync = require('readline-sync');
var fs = require('fs');

//var showMenu = require('./menu.js');
//var loadData = require('./load');

function showMenu() {
	console.log('1. Show all students');
	console.log('2. Create a new student');
	console.log('3. Save & Exit');

	var option = readlineSync.question('> ');
	switch (option) {
		case '1':
			showStudents();
			showMenu();
			break;
		case '2':
			createStudent();
			//console.log(students);
			showMenu();
			break;
		case '3':
			saveAndExit();
			break;
		default:
			showMenu();
			break;
	}
};

var students = [];

function loadData() {
	var fileContent = fs.readFileSync('./data.json');
	students = JSON.parse(fileContent);
};

function createStudent() {
	var name = readlineSync.question('Name: ');
	var age = readlineSync.question('Age: ');
	var student = {
		name: name,
	age: parseInt(age)
	};
	students.push(student);
}

function showStudents() {
	for (var student of students) {
		console.log(student.name, student.age);
	};
}

function saveAndExit() {
	var studentsString = JSON.stringify(students);
	fs.writeFileSync('./data.json', studentsString, {encoding : 'utf8'});
}

function main() {
	loadData();
	showMenu();
};

main();