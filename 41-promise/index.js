var fs = require('promise-fs');

function onDone(song) {
	console.log(song);
};

function onError(err) {
	console.log(err);
};

function readFile(path) {
	return fs.readFile(path, {encoding: 'utf8'});
};

readFile('./song1.txt')
	.then(onDone)
	.then(function() {
		return readFile('./song2.txt');
	})
	//.then (readFile('./song2.txt')
	.then(onDone)
	.catch(onError);
//fs.readFile('./song1.txt', {encoding: 'utf8'})
//	.then (function(song1) {
//		console.log(song1);
//	})
//	.catch( function(err) {
//		console.log(err);
//	});
