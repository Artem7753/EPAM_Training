function sumOf(a){
	var sum = a;
	
	function add(b){
		sum+=b;
		console.log(add);
		return add;
	}
	
	add.toString = function(){
		return sum;
	}
	
	return add;
}

console.log(sumOf(1)(3)(5)(7));