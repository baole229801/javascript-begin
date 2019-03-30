var Coffeemachine = require('./machine');
var beep = require('./sound');

var machine1 = new Coffeemachine('HP');

machine1.makingCoffee(beep);
console.log(machine1);
