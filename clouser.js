function Hello(){
	var myTest ="bibin";

	return function Hi(){
		console.log(myTest);
	}
}

var Test = Hello();
Test();