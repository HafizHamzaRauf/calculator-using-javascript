//-------------------SELECTING THE ELEMENTS --------------------------//
const operands = document.querySelectorAll(".operand");
const operators = document.querySelectorAll(".operator");
const inputField = document.querySelector("input");
let firstOperand, secondOperand, operator;
let hasFirstValue = false;
operands.forEach(function (ele) {
  ele.addEventListener("click", function () {
    inputField.value += ele.textContent;
  });
});

//--------------------------------------ASKING USER FOR INPUT------------------------------//
operators.forEach(function (oper) {
  oper.addEventListener("click", function () {
    if (!inputField.value) {
      // check for empty input  fields
      alert("Please enter a value first");
    } else {
      firstOperand = inputField.value;
      inputField.value = "";
      operator = oper.textContent;
      hasFirstValue = true;
    }
  });
});

const button = document.querySelector(".equal");
const clear = document.querySelector(".clear");
clear.addEventListener("click", function () {
  inputField.value = "";
  hasFirstValue = false;
});

// -----------------------EQUAL BUTTON ---------------------------------------//
button.addEventListener("click", function () {
  // checking for empty
  if (!hasFirstValue) {
    alert("please enter first operand");
    return;
  }
  if (!inputField.value) {
    alert("please enter a value  to calculate");
    return;
  }
  secondOperand = inputField.value;
  switch (operator) {
    case "+":
      inputField.value = +firstOperand + +secondOperand;
      break;
    case "-":
      inputField.value = +firstOperand - +secondOperand;
      break;
    case "÷":
      inputField.value = +firstOperand / +secondOperand;
      break;
    case "x":
      inputField.value = +firstOperand * +secondOperand;
      break;
  }
  hasFirstValue = false;
});
