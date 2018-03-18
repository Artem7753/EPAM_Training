var deepCopy = function(obj){
	var newObj = {};
	for(key in obj){
		if(typeof(obj[key]) == 'object') {
			newObj[key] = deepCopy(obj[key]);
		}	
		else {newObj[key] = obj[key];}
	}
	return newObj;
}

var object = {
	name: 'Artem',
	male: 'male',
	age: {
		first:'19',
		second:{
			third: 14
		}
	},
	
};
var newObj = deepCopy(object);
console.log(newObj);
console.log(object);