var zingMagazine = [
	{
		id: 0,
		sectionName: 'Global news',
		article: {
			type: 0,
			//writer:
		}
	},
	{
		id: 1,
		sectionName: 'Business',
		article: {
			type: 2,
			//writer:
		}
	},
	{
		id: 2,
		sectionName: 'Laws',
		article: {
			type: 0,
			//writer:
		}
	},
	{
		id: 3,
		sectionName: 'Sports',
		article: {
			type: 3,
			//writer:
		}
	},
	{
		id: 4,
		sectionName: 'Technology',
		article: {
			type: 2,
			//writer:
		}
	},
	{	
		id: 5,
		sectionName: 'Fashion',
		article: {
			type: 3,
			//writer:
		}
	}];

var type = [
	{	
		id: 0,
		name: 'Original Research',
		ratingOverTen: 7
	},
	{
		id: 1,
		name: 'Letters',
		ratingOverTen: 9 
	},
	{
		id: 2,
		name: 'Review Articles',
		ratingOverTen: 6 
	},
	{
		id: 3,
		name: 'Perspective, Opinion and Commentary',
		ratingOverTen: 8 
	},
];

var writers = [
	{id: 0, name: 'Le Trong Bao', writingAge: 17, section: 1},
	{id: 1, name: 'To Ba Thanh Tung', writingAge: 19, section: 4},
	{id: 2, name: 'Phan Phuong Duy', writingAge: 21, section: 3},
	{id: 3, name: 'Doan Trong Nhan', writingAge: 20, section: 2},
];

const getWriterInSection = (section) => {
	var sectionObject = zingMagazine.find((x) => {
		return x.sectionName === section;
	});
	//console.log(sectionObject);

	var getWriter = writers.filter((writer) => {
		return writer.section === sectionObject.id;
	});

	return getWriter;
};
console.log(getWriterInSection('Technology'));
	

