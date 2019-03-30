// show three choices
var Student = require('./student.js');
var readlineSync = require('readline-Sync');
var fs = require('fs');

var dataList = [];

while(true) {
//var dataList = [];

var text = fs.readFileSync('./choice.txt', {encoding: 'utf8'});
console.log('Choose the following command:');
console.log(text);
var userChoice = readlineSync.question('Option: ');

if (userChoice == 1) {
	var dataString = fs.readFileSync('./data.json', {encoding:'utf8'});
	var data = JSON.parse(dataString);
	console.log(data);
}

if (userChoice == 2) {
	var student = new Student();
	student.ask();
	//var studentString = JSON.stringify(student);
	dataList.push(studentString);
	var dataListString = JSON.stringify(dataList);
	fs.writeFileSync('./data.json', dataListString);

	var exit = readlineSync.question('Save and Exit: ');
	if(exit == 3) {
		break;
	}
}
}