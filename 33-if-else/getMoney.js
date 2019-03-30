var moneyCount = require('./count.js');

var bills = [
	{ value: 10000 },
	{ value: 20000 },
	{ value: 50000 },
	{ value: 100000, fake: true},
	{ value: 200000}
];


moneyCount(bills);
