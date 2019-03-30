// Example : calculate bus ticket fee
// -if age < 15, discount 20%
// -if age > 60, discount 10%
// -otherwise, non-discount


var getTicketFee = require('./App');
var userForm = require('./Form');

var person1 = new userForm(50);

console.log(getTicketFee(person1));