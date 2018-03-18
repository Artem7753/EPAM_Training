var belongToObject = function(obj,field){
	var result = false;
	for(key in obj){
		if (key == field) result = true;
	}
	return result;
}
var object = {
	name: 'Artem',
	age: 20,
	male: 'male'
};
console.log(belongToObject(object,'name'));