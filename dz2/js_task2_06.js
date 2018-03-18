var parseArrayToInt = function(arr){
	for(var i = 0;i<arr.length;i++){
		arr[i] = parseInt(arr[i]);
	}
	return arr;
}
console.log(parseArrayToInt(['1',2,'3']));