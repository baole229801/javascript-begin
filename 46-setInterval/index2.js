//

function countFrom(a, b) {
	return new Promise(function(resolve, reject) {
		if (a > b) {
			reject();
		} else {
			var intervalId = setInterval(function() {
				//++a;
				console.log(++a);
				if (a === b) {
					clearInterval(intervalId);
					resolve();
				}
			}, 1000);
		}
	});
};

countFrom(1, 10).then(function(value) {
	console.log('Done');
}).catch(function(error) {
	console.log(error);
});

