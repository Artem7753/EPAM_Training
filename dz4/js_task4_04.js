var upperCaseAllFirstSymbols = function(str){
	var arrayStr = str.split(" ");
	for(var i=0;i<arrayStr.length;i++){
		arrayStr[i] = upperCaseFirstSymbol(arrayStr[i]);
	}
	return arrayStr.join(" ");
}
console.log(upperCaseAllFirstSymbols("test test test"));