var upperCaseFirstSymbol = function(str){
	var symbol = str.slice(0,1).toUpperCase();
	str = str.slice(1,str.length);
	return symbol + str;
}
console.log(upperCaseFirstSymbol("test"));