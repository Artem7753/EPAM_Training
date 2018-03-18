var object = {};
object.name = 'object';
object.num = 3;
object.null = null;
delete object.null;
console.log(object.name);