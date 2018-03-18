var isUniqueElementsInArray = function(arr){
	var result = true;
	for(var i = 0;i<arr.length - 1;i++){
		if(arr[i] != arr[i+1]) result = false;
	}
	console.log(result);
}
isUniqueElementsInArray([1,1,1]);
isUniqueElementsInArray([1,1,2]);