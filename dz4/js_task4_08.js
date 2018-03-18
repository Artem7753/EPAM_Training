var turnStr = function(str){
	var strArray = str.split("");
	var res = "";
	for(var i = strArray.length-1;i>=0;i--){
		res+=strArray[i];
	}
	return res;
}

console.log(turnStr("my cat"));