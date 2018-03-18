var strToCamelCase = function(str){
	var arrayStr = str.split(" ");
	for(var i=1;i<arrayStr.length;i++){
		arrayStr[i] = upperCaseFirstSymbol(arrayStr[i]);
	}
	return arrayStr.join("");
}
console.log(strToCamelCase("test test test"));