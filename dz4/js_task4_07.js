var insertToStr = function(str,word,position){
	var masStr = str.split(" ");
	masStr.splice(position,0,word);
	return masStr.join(" ");
}
console.log(insertToStr("Я javascript","изучаю",1));