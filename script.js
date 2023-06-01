const calculatorScreen = document.querySelector(".calc-screen");

calculatorScreen.textContent = 12312.2133;

const clearScreen = () => {
  calculatorScreen.textContent = "";
};

setTimeout(() => {
  clearScreen();
}, 1000);

const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

let num1 = 0;
let num2 = 0;
let operator;

const operate = (a, b, operand) => {
  switch (operand) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      return 0;
  }
};
