var maxElementInArray = function(arr){
	var max = arr[0];
	for(var i = 0;i<arr.length;i++){
		if(arr[i]>max) max = arr[i]
	}
	console.log("Максимальное значение:"+max);
}
maxElementInArray([1,2,4,5,6,7,8,8,54]);
