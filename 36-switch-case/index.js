// switch ... case 
// syntax :
// 	swtich(expression) {
// 		case value1: 
//			do something;
//			break;
// 	....
//		default:
//			do something;
//			break;

// bronze, silver, gold, diamond

var getTotal = require('./total');
var memberCard = require('./Form');

var user1 = new memberCard('gold');

console.log(getTotal(user1, 500000));