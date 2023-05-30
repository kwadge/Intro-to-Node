//Functions
function addition() {
	var ourAnswer = document.getElementById("answer").value;
	if (isNaN(ourAnswer)) {
		document.getElementById("output").innerHTML = "Hey, " + ourAnswer + " is not a number!";
	} else {
		if(ourAnswer==correctAnswer) {	
			document.getElementById("output").innerHTML = "Correct " + numOne + " + " + numTwo + " = " + ourAnswer;
		} else {
			document.getElementById("output").innerHTML = "Incorrect";
		}
	}
}


function newCard() {
	numOne = Math.floor(Math.random()*10)+1;
	numTwo = Math.floor(Math.random()*10)+1;
	document.getElementById("question").innerHTML = numOne + " + " + numTwo;
	correctAnswer = numOne + numTwo;
	document.getElementById("output").innerHTML = "";
	document.getElementById("answer").value = "";
}