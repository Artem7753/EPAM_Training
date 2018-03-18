var passObject = function(obj){
	for(key in obj){
		console.log(key);
	}
}
var object = {
	name: 'Artem',
	age: 20,
	male: 'male'
};
passObject(object);