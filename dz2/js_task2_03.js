var countOddAndEven = function(arr){
	var countOdd = 0;
	var countEven = 0;
	var countZero = 0;
	for (var i = 0 ;i<arr.length;i++){
		if(arr[i] === 0) {
			countZero++;
			continue;
		}
		if(arr[i]%2 === 0) countEven++;
		if(arr[i]%2 === 1) countOdd++;
	}
	console.log("Четных: "+countEven);
	console.log("Нечетных: "+countOdd);
	if(countZero>0) console.log("Нуль: "+countZero);
}
countOddAndEven([1,2,3,4,5,6,7,8,8]);

