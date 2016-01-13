var readline = require("readline");
var variables = [];
var count = 0;
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

callInput();


function callInput(){
console.log("Enter variables");
rl.on('line', function (cmd) {
  count++;
  variables.push(cmd);
  if (count == 4) { 
	calculate();
	rl.close();
	}
});
}


function calculate(){

var timeSpan = parseInt(variables[1]) - parseInt(variables[0]);
timeSpan = timeSpan*365;
var neededSupply = parseFloat(variables[3]) * timeSpan;

console.log(neededSupply + "kg of " + variables[2] + " would be enough until I am " + variables[1] + " years old.");


}
