

var numberOne =	document.getElementById("number1");
var numberTwo =	document.getElementById("number2");
var buttOne =	document.getElementById("addButt");
var buttTwo =	document.getElementById("minButt");
var buttThree =	document.getElementById("mulButt");
var buttFour =	document.getElementById("divButt");

function weAdd() {
	 var dodati = Number(numberOne.value) + Number(numberTwo.value);
   alert(dodati);
}

buttOne.addEventListener("click", weAdd);

function weMin() {
	 var dodati = Number(numberOne.value) - Number(numberTwo.value);
   alert(dodati);
}


buttTwo.addEventListener("click", weMin);

function weMul() {
	 var dodati = Number(numberOne.value) * Number(numberTwo.value);
   alert(dodati);
}

buttThree.addEventListener("click", weMul);

function weDiv() {
	 var dodati = Number(numberOne.value) / Number(numberTwo.value);
   alert(dodati);
}

buttFour.addEventListener("click", weDiv);
