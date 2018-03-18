var printArray = function(arr){
	var count;
	for(var i = 0;i<arr.length;i++){
		console.log(arr[i]);
		count = i+1;
	}
	console.log("Количество элементов массива: "+count);
}
printArray([1,2,3,4,5]);