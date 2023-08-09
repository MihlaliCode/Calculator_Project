// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const numberButtons = document.querySelectorAll(".number");
  const operatorButtons = document.querySelectorAll(".operator");
  const clearButton = document.querySelector(".clear");
  const equalButton = document.querySelector(".equal");

  let currentInput = "";
  let firstNumber = "";
  let operator = "";

  function appendToDisplay(value) {
    currentInput += value;
    display.value = currentInput;
  }

  function clearDisplay() {
    currentInput = "";
    firstNumber = "";
    operator = "";
    display.value = "";
  }

  function operate(newOperator) {
    if (currentInput !== "") {
      if (firstNumber === "") {
        firstNumber = currentInput;
      } else {
        firstNumber = calculateResult();
      }
      operator = newOperator;
      currentInput = "";
    }
  }

  function calculateResult() {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(currentInput);
    switch (operator) {
      case "+":
        return (num1 + num2).toString();
      case "-":
        return (num1 - num2).toString();
      case "x":
        return (num1 * num2).toString();
      case "÷":
        return (num1 / num2).toString();
      default:
        return currentInput;
    }
  }

  function calculate() {
    if (operator !== "" && currentInput !== "") {
      currentInput = calculateResult();
      operator = "";
      firstNumber = "";
      display.value = currentInput;
    }
  }

  // Attach event listeners to number buttons
  numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
      appendToDisplay(button.textContent);
    });
  });

  // Attach event listeners to operator buttons
  operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      operate(button.textContent);
    });
  });

  // Attach event listener to clear button
  clearButton.addEventListener("click", () => {
    clearDisplay();
  });

  // Attach event listener to equal button
  equalButton.addEventListener("click", () => {
    calculate();
  });
});