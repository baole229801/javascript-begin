// node js module system
// constructor function
var Mouse = require('./mouse');
var Cat = require('./cat');

var mouse1 = new Mouse('black');
var mouse2 = new Mouse('brown');

var tom = new Cat();

tom.eat(mouse1);
tom.eat(mouse2);
console.log(tom);
console.log(mouse1);