
function calcQadraticEq(){
	var root1 = 0;
	var root2 = 0;
	var input = document.getElementById("input").value;
	var inputArray = input.split(",");
	inputArray = arrayToInteger(inputArray);
	var discriminant = (inputArray[1]*inputArray[1]) + (-4*inputArray[0]*inputArray[2]);
	if (discriminant < 0) {
		document.getElementById("output").value = "No real roots";
	}else if (discriminant == 0){
		root1 = -(inputArray[1]/(2*inputArray[0]));
		document.getElementById("output").value = root1;
	}else{
		root1 = (-inputArray[1] + Math.sqrt(discriminant))/(2*inputArray[0]);
		root2 = (-inputArray[1] - Math.sqrt(discriminant))/(2*inputArray[0]);
		document.getElementById("output").value = root1 + "\n" + root2;
	}
}


function arrayToInteger(target){

	for(var item in target){
		target[item] = parseInt(target[item]);
	}
	return target;

}