// //var fs = require('fs');

// function countFromPromise(first, last) {
// 	return new Promise(function(resolve, reject) {
// 		var intervalId = setInterval(function() {
// 			++first;
// 			console.log(first);
// 			if(first === last) {
// 				clearInterval(intervalId);
// 			}
// 		}, 1000, function(err, data) {
// 			if(err) {
// 				reject(rr);
// 			} else {
// 				resolve(data);
// 			}
// 		}
// 	);
// });

// countFromPromise(1, 9).then(function() {
// 	console.log('Done');
// });