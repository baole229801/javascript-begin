
var myDog = {
	name: 'meo',
	age: 1,
	dead: false
};

var myDogString = JSON.stringify(myDog);
console.log(typeof myDogString);

var myCatString = '{"name":"tom","age":1,"dead":"false"}';
var myCat = JSON.parse(myCatString);
console.log(myCat);