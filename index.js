let display = document.querySelector(".screen-input");

let newDisplayValue1 = 0;
let newDisplayValue2 = 0;
let lastOperation = "";

// display number in the screen-input

function displayNum(num) {
  display.value == "0" ? (display.value = num) : (display.value += num);
}

function clearScreen() {
  display.value = 0;
}

// removeLastNum is responsible for removing the last character
// of the display value
function removeLastNum() {
  if (display.value.length == 1) {
    display.value = "0";
  } else {
    let newDisplayValue = display.value.substring(0, display.value.length - 1);
    display.value = newDisplayValue;
  }
}

// add, subtract, multiply, divide are responsible for storing previously added number in the display,
// clearing the screen and storing the last operation

function add() {
  newDisplayValue1 = Number(display.value);
  display.value = "";
  lastOperation = "+";
}

function subtract() {
  newDisplayValue1 = Number(display.value);
  display.value = "";
  lastOperation = "-";
}

function multiply() {
  newDisplayValue1 = Number(display.value);
  display.value = "";
  lastOperation = "x";
}
function divide() {
  newDisplayValue1 = Number(display.value);
  display.value = "";
  lastOperation = "/";
}

// lastOperation = () => console.error("nothing to calculate")

// // calculate is responsible for storing the previously added number in the display and do math operations on both of the numbers
function calculate() {
  newDisplayValue2 = Number(display.value);

  if (lastOperation == "+") {
    display.value = newDisplayValue1 + newDisplayValue2;
  } else if (lastOperation == "-") {
    display.value = newDisplayValue1 - newDisplayValue2;
  } else if (lastOperation == "x") {
    display.value = newDisplayValue1 * newDisplayValue2;
  } else if (lastOperation == "/") {
    display.value = newDisplayValue1 / newDisplayValue2;
  } else {
    console.error("This should not happen");
  }
}
