var trimTo = function(str,num){
	if (str.length > num){
		str = str.slice(0,num-3);
	}
	return str + "...";
}
console.log(trimTo("sdfsdfdfsdfdf",5));