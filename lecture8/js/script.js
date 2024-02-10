const date = new Date();
const hours = date.getHours();

let welcomeMessage;

if (hours < 12) {
  welcomeMessage = "Good Morning";
} else if (hours < 17) {
  welcomeMessage = "Good Afternoon! Are you in class?";
} else if (hours < 19) {
  welcomeMessage = "Good everying";
} else {
  welcomeMessage = "Good Night!";
}

document.getElementById("greeting").innerHTML =
  `<strong>${welcomeMessage}</strong>`;

const ADD_OP = "add";
const SUB_OP = "sub";
const DIV_OP = "div";
const MUL_OP = "mul";
const ZERO_DIVISION_ERROR_MSG = "Cannot divide by zero";
const INVALID_OPERATION_MSG = "Invalid operation";

// Handle math operations
function calculate(num1, num2, operation) {
  switch (operation.toLowerCase()) {
    case ADD_OP:
      return num1 + num2;
    case SUB_OP:
      return num1 - num2;
    case DIV_OP:
      // Ensure we don't divide by zero
      if (num2 === 0) {
        return ZERO_DIVISION_ERROR_MSG;
      }
      return num1 / num2;
		case MUL_OP: 
      return num1 * num2;
    default:
      return INVALID_OPERATION_MSG;
  }
}

function getNumbers() {
	const a = Number(document.getElementById('number1').value)
	const b = Number(document.getElementById('number2').value)
	return [a, b]
}

function addition() {
	const [a, b] = getNumbers();
	result = calculate(a, b, ADD_OP);
	alert(`The sum of ${a} and ${b} equals to ${result}`);
}
function subtraction() {
    const [a, b] = getNumbers();
    const result = calculate(a, b, SUB_OP);
    alert(`The difference between ${a} and ${b} equals to ${result}`);
}

function multiplication() {
    const [a, b] = getNumbers();
    const result = calculate(a, b, MUL_OP);
    alert(`The product of ${a} and ${b} equals to ${result}`);
}

function division() {
    const [a, b] = getNumbers();
    const result = calculate(a, b, DIV_OP);
    if (result === ZERO_DIVISION_ERROR_MSG) {
        alert(result);
    } else {
        alert(`The quotient of ${a} divided by ${b} equals to ${result}`);
    }
}
