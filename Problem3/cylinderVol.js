var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Enter variable: \n",function(answer){	
	
	console.log(calcCylinderVol(answer));	

	rl.close();
});

function calcCylinderVol(arr){



var inputArray = arr.replace("]","");
inputArray = inputArray.replace("[","");

inputArray = inputArray.split(",");
inputArray = arrayToInteger(inputArray);
volume = Math.PI * Math.pow(inputArray[0],2)*inputArray[1];
return volume;
}



function arrayToInteger(target){

	for(var item in target){
		target[item] = parseInt(target[item]);
	}
	return target;

}