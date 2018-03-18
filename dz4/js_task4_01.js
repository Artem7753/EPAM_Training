var trimStr = function(str){
	var startTrimCharNum = 0;
	var endTrimCharNum = str.length;
	if(str.charAt(0) == " ") startTrimCharNum = 1
	if(str.charAt(endTrimCharNum) == " ") endTrimCharNum--
	return str.slice(startTrimCharNum,endTrimCharNum);
}

console.log(trimStr(" fdfs fdsf ddd"));