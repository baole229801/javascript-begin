var readlineSync = require('readline-sync');

var  userName = readlineSync.question('May I have your name: ');
//console.log('hi ' + userName + ' !');

var languages = [];

var userLanguage = readlineSync.question('What is your mother language? ');
languages.push(userLanguage);
console.log(languages);

