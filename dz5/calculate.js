function calculator(firstNumber){
	this.firstNumber = firstNumber;
	this.result = 0;
};

calculator.prototype.sum = function(){
	var sum = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		sum +=arguments[i];
	}
	this.result = sum;
};

calculator.prototype.dif = function(){
	var dif = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		dif -=arguments[i];
	}
	this.result = dif;
};

calculator.prototype.div = function(){
	var div = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		if(arguments[i] === 0) return "Ошибка!";
		div /=arguments[i];
	}
	this.result = div;
};

calculator.prototype.mul = function(){
	var mul = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		mul *=arguments[i];
	}
	this.result = mul;
};

calculator.prototype.getResult = function(){
	return this.result;
}

calculator.prototype.reset - function(){
	return this.result = 0;
}


var myCalculator = new calculator(100); 

myCalculator.sum(1, 2, 3)
console.log(myCalculator.getResult()); //вернет 106 

myCalculator.dif(10, 20)
console.log(myCalculator.getResult()); //вернет 70 

myCalculator.div(2, 2)
console.log(myCalculator.getResult()); //вернет 25 

myCalculator.mul(2, 2)
console.log(myCalculator.getResult()); //вернет 400


