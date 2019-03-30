
function Coffeemachine(brand) {
	this.brand = brand;
	this.off = false;
};

Coffeemachine.prototype.makingCoffee = function(onFinish) {
	console.log('On progress....');
	onFinish();
	//Coffeemachine.shutdown = true;
};
Coffeemachine.prototype.shutDown = function() {
	// body...
	this.off = true;
};

module.exports = Coffeemachine;

