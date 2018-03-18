var searchSameStr = function(baseStr, entryStr){
	if (baseStr.indexOf(entryStr) != -1) return true;
	else return false;
}
console.log(searchSameStr("hello world","world"));
console.log(searchSameStr("hello world","potato"));