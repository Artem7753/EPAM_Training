var stringOrNumber = function(arg){
	if (typeof(arg) == "string"){
		console.log('Это строка');
	}
	else if(typeof(arg) == "number"){
-		console.log('Это число');
	}
	else {
		console.log('Error');
	}
}
stringOrNumber('test');
stringOrNumber(2);
stringOrNumber([]);