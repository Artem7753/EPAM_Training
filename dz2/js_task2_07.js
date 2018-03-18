var isSimple = function(num){
	var result = true;
	if(num > 1000 || num<=0){
		console.log("Число больше 1000 или меньше 0");
		return 0;
	}
	for(var i=2;i<num;i++){
		if(num%i == 0) {
			result = false;
			i = num;
		}
	}
	if(result) console.log("Число - простое");
	else console.log("Число - составное");
}
isSimple(13);