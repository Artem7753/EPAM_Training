var printCountUniqueSymbols = function(str){
	var uniqueSymbols = [];
	var strArray = str.split("");
	for(var i = 0;i<strArray.length;i++){
		var isUnique = true;
		for (var j = 0;j<uniqueSymbols.length;j++){
			if(strArray[i] === uniqueSymbols[j]) isUnique = false;
		}
		if(isUnique) uniqueSymbols.push(strArray[i]);
	}
	
	for(var i = 0;i<uniqueSymbols.length;i++){
		var count = 0;
		for(j = 0;j<strArray.length;j++){
			if(uniqueSymbols[i] == strArray[j]) count++;		
		}
		console.log(uniqueSymbols[i] + ": " + count);
	}
}

printCountUniqueSymbols("aaavvddfga");