function newObject(){	
}
newObject.prototype.testFunc = function(){
	console.log("test");
};

var object = Object.create(newObject);
object.prototype.testFunc();

var searchInPrototype = function(objectName,propertyName){
	var result = false;
	for(key in objectName.prototype){
		if(key === propertyName){
			result = true;
		}
	}
	return result;
}

console.log(searchInPrototype(object,'testFunc'));
console.log(searchInPrototype(object,'testF'));