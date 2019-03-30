// Date
// moment.js

// var now = new Date();
// var myBirthday = new Date(1998, 1, 22);

// number of milliseconds from 1-1-1970 +7

// console.log(now.getTime());
// console.log(myBirthday.getTime());

var moment = require('moment');

var now = moment('2019-03-10 00:00');
console.log(now.fromNow());