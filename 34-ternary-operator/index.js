// Toss a coin

function tossCoin() {
	var value = Math.random();
	var result = (value > 0.5) ? 'Front' : 'Back';

	//if (value > 0.5) {
		//console.log('Front');
	//	result = 'Front';
	//} else {
		//console.log('Back');
	//	result = 'Back';
	//};
	console.log(result);
};

tossCoin();