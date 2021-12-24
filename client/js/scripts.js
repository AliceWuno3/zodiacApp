function getAlerted(){
	alert("External file is connected to the DOM");
}
function demoFunction(){
	var name="Alice";
	var number = 20;
	document.getElementById('demo').innerHTML=name;
}
function objectFunction(){
	var person1={name:'Alice', age: 20, location:"San Francisco", graduated: true};
	var person2={name:'Lisa', age: 21, locationL"Las Vegas", graduated:false};
	var people = [person1, person2];
	// console.log(people);
	for(var i = 0; i<people.length; i++){
		document.getElementById('demo2').innerHTML += people[i].name + '<br>';
	}
	
}
