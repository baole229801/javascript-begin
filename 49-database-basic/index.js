	// Data design

	var classes = [
		{
			id: 0,
			name: '1A',
			teacher : 0,
		// 	student:[
		// 		{name: 'Le Trong Bao', level: 'beast'},
		// 		{name: 'To Ba Thanh Tung', level: 'chicken'},
		// 		{name: 'Phan Phuong Duy', level: 'amateur'},
		// 		{name: 'Doan Trong Nhan', level: 'crazy'}]
		},
		{
			id: 1,
			name: '2A',
			teacher: 1
		},
		{
			id: 2,
			name: '3A',
			teacher: 2
		},
		{
			id: 3,
			name: '4A',
			teacher: 3
		},
		{
			id: 4,
			name: '5A',
			teacher: 4
		}
	];

	var teacher = [
		{
			id: 0,
			name: 'Nga',
			age: 50
		},
		{
			id: 1,
			name: 'Hoa',
			age: 40
		},
		{
			id: 2,
			name: 'Huong',
			age: 38
		},
		{
			id: 3,
			name: 'Thu',
			age: 43
		},
		{
			id: 4,
			name: 'Hung',
			age: 42
		}
		]

	var students = [
		{id:0, name: 'Le Trong Bao', level: 'beast', class: 1},
		{id:1, name: 'To Ba Thanh Tung', level: 'chicken', class: 0},
		{id:2, name: 'Phan Phuong Duy', level: 'amateur', class: 1},
		{id:3, name: 'Doan Trong Nhan', level: 'crazy', class: 3}
		];

	// var stuNum = classes.find(function(x) {
	// 	return x.name == '1A';
	// });

	// console.log(stuNum.student);

	const getStudenInClass = (className) => {
		var classObject = classes.find((x) => {
			return x.name === className;
		});
		console.log(classObject);

		var studentInClass = students.filter((student) => {
			return student.class === classObject.id;
		});

		return studentInClass;
	};

	console.log(getStudenInClass('1A'));

