var fs = require('promise-fs');

function readFilePromise(path) {
	return new Promise(function(resolve, reject) {
		
	})
}

readFilePromise('./song1.txt', {encoding: 'utf8'})
	.then(function(song1) {
		console.log(song1);
		return readFilePromise('./song2.txt', {encoding: 'utf8'});
	})
	.then(function(song2) {
		console.log(song2);
		return readFilePromise('./song3.txt', {encoding: 'utf8'});
	})
	.then(function(song3) {
		console.log(song3);
	});