// setTimeout
// clearTimeout
// setTimeout(fn, ms);

//timer

console.log('Start');

var timeoutID = setTimeout(function() {  // Anonymous function
	console.log('Finish');
}, 1);
console.log('Done');
//console.log(timeoutID);
clearTimeout(timeoutID);