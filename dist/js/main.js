(function() {

  // Output varialbles
	let output = document.getElementById('main');
	// let subOutput = document.getElementById('sub');
	let operatorCount =0;
	let decimalCount =0;
	let operators = ['+', '-', 'X', '/'];
	let mainLastElement = output.innerHTML[output.innerHTML.length -1];
	// let subLastElement = subOutput.innerHTML[subOutput.innerHTML.length -1];

  // Declare Variables for the buttons
	const numberSeven = document.getElementById('7');
	const numberEight = document.getElementById('8');
	const numberNine = document.getElementById('9');
	const numberSix = document.getElementById('6');
	const numberFive = document.getElementById('5');
	const numberFour = document.getElementById('4');
	const numberThree = document.getElementById('3');
	const numberTwo = document.getElementById('2');
	const numberOne = document.getElementById('1');
	const numberZero = document.getElementById('zero');
	const AC = document.getElementById('AC');
	const CE = document.getElementById('CE');
	const divide = document.getElementById('/');
	const plus = document.getElementById('+');
	const minus = document.getElementById('-');
	const multiply = document.getElementById('X');
	const equals = document.getElementById('equals');

  // Add event listeners for all buttons
	AC.addEventListener('click', reset);
	CE.addEventListener('click', goBackOne);
	equals.addEventListener('click', calculate);
	plus.addEventListener('click', addition);
	minus.addEventListener('click', subtraction);
  // multiply.addEventListener('click', multiplication);
  // divide.addEeventListener('click', division)
	numberOne.addEventListener('click', appendOne);
	numberTwo.addEventListener('click', appendTwo);
	numberTwo.addEventListener('click', appendTwo);
	numberThree.addEventListener('click', appendThree);
	numberFour.addEventListener('click', appendFour);
	numberFive.addEventListener('click', appendFive);
	numberSix.addEventListener('click', appendSix);
	numberSeven.addEventListener('click', appendSeven);
	numberEight.addEventListener('click', appendEight);
	numberNine.addEventListener('click', appendNine);
	numberZero.addEventListener('click', appendZero);

  // Operator buttons handlers
	function addition() {
		buffer.push()
	}


	function subtraction() {

	}

  // Number event handlers

	function appendOne() {
		renderNumber('1');
	}

	function appendTwo() {
		renderNumber('2');
	}

	function appendThree() {
		renderNumber('3');
	}

	function appendFour() {
		renderNumber('4');
	}

	function appendFive() {
		renderNumber('5');
	}

	function appendSix() {
		renderNumber('6');
	}

	function appendSeven() {
		renderNumber('7');
	}

	function appendEight() {
		renderNumber('8');
	}

	function appendNine() {
		renderNumber('9');
	}

	function appendZero() {
		renderNumber('0');
	}

	function appendDecimal() {
		if (Math.abs(operatorCount - decimalCount) < 2) {
			decimalCount += 1;
			output.innerHTML += '.';
		}
    
	}

	function renderNumber(number) {
		if(operators.includes(output.innerHTML)){
			output.innerHTML = '';
		}
		if (output.innerHTML.length < 8 && !operators.includes()) {
			(output.innerHTML == '0') ? output.innerHTML = number: output.innerHTML += number;
		}
	}

  // Utility Functions
	function reset() {
		output.innerHTML = '0';
		subOutput.innerHTML = '';
	}

	function goBackOne() {

		output.innerHTML.length > 1 ?
      output.innerHTML = output.innerHTML.slice(0, output.innerHTML.length - 1) :
			output.innerHTML = '0';

	}

	function calculate() {
		console.log(subOutput.innerHTML + output.innerHTML);
		output.innerHTML = eval(subOutput.innerHTML);
		subOutput.innerHTML = '';
	}

})();