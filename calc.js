//Calculator Program
const display = document.getElementById("display");
let Val1 = "";
let Val2 = "";
let operation = 0;

console.log("Code Start");

function appendToDisplay(input) {
  console.log(`pressed button: ${input}`);
  display.value += input;
  if (isOperator(input)) {
    console.log("an Operator was pressed");
  } else {
    console.log("No Operator was pressed");
  }
  console.log(`new value of the display: ${display.value}`);
}

function clearDisplay() {}

function Calculate() {}

function isOperator(WhichInput) {
  console.log(`Checking if ${WhichInput} is an operator`);
  if (
    WhichInput == "+" ||
    WhichInput == "-" ||
    WhichInput == "/" ||
    WhichInput == "*"
  ) {
    return true;
  } else {
    return false;
  }
}
