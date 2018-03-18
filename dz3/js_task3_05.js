var copyObject = function(obj){
	var newObj = obj;
	return newObj;
}
var object = {
	name: 'Artem',
	age: 20,
	male: 'male'
};
var newObj = copyObject(object);
console.log(newObj);