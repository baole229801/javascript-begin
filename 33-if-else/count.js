function moneyCount(Arr) {
	var total = 0;

	for(var member of Arr) {
		if(!Arr.fake) {
			total += Arr.value;
		} else {
			console.log('Fake Money Detected !!!', member);
		}
		return total;
	}
}

module.exports = moneyCount();