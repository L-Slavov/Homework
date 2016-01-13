var readline = require("readline");

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});


rl.question("Enter variable: \n",function(answer){	
	
	var knots = parseFloat(answer)*0.539956803;
	console.log(knots);

	rl.close();
});
