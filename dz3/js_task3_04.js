var belongToObject = function(obj,field){
	var result = false;
	for(key in obj){
		if (key == field) result = true;
	}
	if(!result) obj[field] = 'new';
}
var object = {
	name: 'Artem',
	age: 20,
	male: 'male'
};
belongToObject(object,'name1');
console.log(object.name1);