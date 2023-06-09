const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".digits");
const keys = calculator.querySelectorAll("button");
const operatorKeys = calculator.querySelectorAll('[data-type="operator"]');

const clearScreen = () => {
  display.textContent = "0";
  delete calculator.dataset.firstNum;
  delete calculator.dataset.operator;
  operatorKeys.forEach((el) => (el.dataset.state = ""));
};

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;

    if (type === "number") {
      if (displayValue === "0" || previousKeyType === "operator") {
        display.textContent = keyValue;
      } else {
        display.textContent = displayValue + keyValue;
      }
    }

    if (type === "operator") {
      // const operatorKeys = calculator.querySelectorAll(
      //   '[data-type="operator"]'
      // );
      operatorKeys.forEach((el) => (el.dataset.state = ""));
      key.dataset.state = "selected";

      calculator.dataset.firstNum = displayValue;
      calculator.dataset.operator = key.dataset.key;
    }

    if (type === "equal") {
      const firstNum = calculator.dataset.firstNum;
      const operator = calculator.dataset.operator;
      const secondNum = displayValue;

      // const operatorKeys = calculator.querySelectorAll(
      //   '[data-type="operator"]'
      // );
      operatorKeys.forEach((el) => (el.dataset.state = ""));

      display.textContent = calculate(firstNum, secondNum, operator);
    }

    if (type === "delete") {
      display.textContent = displayValue.substring(0, displayValue.length - 1);
    }

    if (type === "clear") {
      clearScreen();
    }

    calculator.dataset.previousKeyType = type;
  });
});

const calculate = (a, b, operand) => {
  a = parseInt(a);
  b = parseInt(b);
  if (operand === "plus") return a + b;
  if (operand === "minus") return a - b;
  if (operand === "times") return a * b;
  if (operand === "divide") return a / b;
};
