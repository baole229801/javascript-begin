//var readlineSync = require('readline-sync');
var Pet = require('./getpet');

var myPet = new Pet();
myPet.ask();

console.log(myPet);