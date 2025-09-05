let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "") return;

  const lastChar = currentInput.slice(-1);
  if ("+-*/".includes(lastChar)) {
    // Replace last operator if operator already present
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function clearDisplay() {
  currentInput = "";
  updateDisplay("0");
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay(currentInput || "0");
}

function calculate() {
  try {
    const result = eval(currentInput);
    if (result === Infinity || result === -Infinity) {
      updateDisplay("Error: ÷ by 0");
    } else if (isNaN(result)) {
      updateDisplay("Invalid");
    } else {
      updateDisplay(result);
      currentInput = result.toString();
    }
  } catch (e) {
    updateDisplay("Syntax Error");
  }
}

function updateDisplay(value = currentInput) {
  display.textContent = value;
}
