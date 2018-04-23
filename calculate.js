function Calculator(firstNumber){
	this.firstNumber = firstNumber;
	this.result = 0;
};

Calculator.prototype.sum = function(){
	var sum = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		sum +=arguments[i];
	}
	this.result = sum;
};

Calculator.prototype.dif = function(){
	var dif = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		dif -=arguments[i];
	}
	this.result = dif;
};

Calculator.prototype.div = function(){
	var div = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		if(arguments[i] === 0) return "Ошибка!";
		div /=arguments[i];
	}
	this.result = div;
};

Calculator.prototype.mul = function(){
	var mul = this.firstNumber;
	for(var i = 0;i < arguments.length;i++ ){
		mul *=arguments[i];
	}
	this.result = mul;
};

Calculator.prototype.getResult = function(){
	return this.result;
}

Calculator.prototype.reset - function(){
	return this.result = 0;
}

function NewCalculator(firstNumber){
	Calculator.apply(this, arguments);
	this.name = prompt("write your name");
}

NewCalculator.prototype = Object.create(Calculator.prototype);
NewCalculator.prototype.constructor = NewCalculator;

NewCalculator.prototype.log = function(){
	this.result = Math.log(this.firstNumber);
}

NewCalculator.prototype.pow = function(){
	var res = this.firstNumber;
	for(var i = 0;i<arguments.length;i++){
		res = Math.pow(res,arguments[i]);
	}
	this.result = res;
}
NewCalculator.prototype.getResult = function(){
	return this.name + " ,result is, " + this.result;
}

var myCalculator = new Calculator(100);
var newMyCalculator = new NewCalculator(100);
console.log(newMyCalculator);

newMyCalculator.sum(1, 2, 3);
console.log(newMyCalculator.getResult()); //вернет 106

newMyCalculator.dif(10, 20);
console.log(newMyCalculator.getResult()); //вернет 70

newMyCalculator.div(2, 2);
console.log(newMyCalculator.getResult()); //вернет 25

newMyCalculator.mul(2, 2);
console.log(newMyCalculator.getResult()); //вернет 400

newMyCalculator.log(1, 5);
console.log(newMyCalculator.getResult());

newMyCalculator.pow(2, 2);
console.log(newMyCalculator.getResult()); //вернет 400
