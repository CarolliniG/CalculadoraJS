const resultElement = document.querySelector(".result");
const buttons = document.querySelectorAll(".buttons button");
const resultButton = document.querySelector(".button-result");

let currentNumber = "";
let firstOperand = null;
let operator = null;
let restart = false;

function updateResult(originClear = false) {
  resultElement.innerText = originClear ? 0 : currentNumber.replace(".", ",");
}

function addDigit(digit) {
  if (digit === "." && currentNumber.includes(".")) return;

  if (restart) {
    currentNumber = digit;
    restart = false;
  } else {
    currentNumber += digit;
  }

  updateResult();
}

function clearAll() {
  currentNumber = "";
  firstOperand = null;
  operator = null;
  restart = false;
  updateResult();
}

function handleOperation(op) {
  if (currentNumber === "") return;
  if (operator !== null) {
    calculate();
  }
  firstOperand = parseFloat(currentNumber);
  operator = op;
  currentNumber = "";
  restart = true;
}

function calculate() {
  if (firstOperand === null || operator === null || currentNumber === "") return;
  const secondOperand = parseFloat(currentNumber);
  let answer;
  switch (operator) {
    case "+":
      answer = firstOperand + secondOperand;
      break;
    case "-":
      answer = firstOperand - secondOperand;
      break;
    case "*":
      answer = firstOperand * secondOperand;
      break;
    case "/":
      if (secondOperand === 0) {
        alert("Error: Division by zero!");
        return;
      }
      answer = firstOperand / secondOperand;
      break;
    default:
      return;
  }
  currentNumber = answer.toString();
  firstOperand = null;
  operator = null;
  restart = true;
  updateResult();
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const buttonText = button.innerText;
    switch (buttonText) {
      case "C":
        clearAll();
        break;
      case "±":
        // Implement logic to handle positive/negative toggle
        break;
      case "%":
        answer = (firstOperand * secondOperand) / 100;
        break;
      case "=":
        calculate();
        break;
      case ".":
        addDigit(buttonText);
        break;
      default:
        // Numbers 0-9
        addDigit(buttonText);
    }
  });
});


