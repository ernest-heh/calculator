const calculator = document.querySelector(".calculator");
const display = calculator.querySelector(".calc-screen");
// const keys = document.querySelector(".calculator");
const keys = calculator.querySelectorAll("button");

const clearScreen = () => {
  display.textContent = "0";
};

// keys.addEventListener("click", (e) => {
//   if (!e.target.closest("button")) return;

//   const key = e.target;
//   const keyValue = key.textContent;
//   const displayValue = display.textContent;

//   if (displayValue === "0") {
//     display.textContent = keyValue;
//   } else {
//     display.textContent = displayValue + keyValue;
//   }
// });

keys.forEach((key) => {
  key.addEventListener("click", () => {
    const keyValue = key.textContent;
    const displayValue = display.textContent;
    const { type } = key.dataset;
    const { previousKeyType } = calculator.dataset;

    if (type === "number") {
      if (displayValue === "0") {
        display.textContent = keyValue;
      } else if (previousKeyType === "operator") {
        display.textContent = keyValue;
      } else {
        display.textContent = displayValue + keyValue;
      }
    }

    if (type === "operator") {
      console.log(key);
    }

    if (type === "equal") {
    }

    calculator.dataset.previousKeyType = type;
  });
});

window.addEventListener("keyup", handleKeyboardInput);

const handleKeyboardInput = (e) => {
  if (e.key >= 0 && e.key <= 9) appendNumber(e.key);
  if (e.key === ".") appendPoint();
  if (e.key === "=" || e.key === "Enter") evaluate();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "Escape") clearScreen();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    setOperation(convertOperator(e.key));
};

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
