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
  if (currentInput === "" && operator !== "-") return; // only allow "-" at the start

  const lastChar = currentInput.slice(-1);

  if ("+-*/".includes(lastChar)) {
    // prevent repeated operators
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
    if (isNaN(result)) {
      updateDisplay("NaN");
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
