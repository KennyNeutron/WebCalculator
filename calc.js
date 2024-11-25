//Calculator Program
const display = document.getElementById("display");
let Val1 = "";
let Val2 = "";
let operation = 0;
let answer = 0;

console.log("Code Start");

function appendToDisplay(input) {
  console.log(`pressed button: ${input}`);

  if (isOperator(input)) {
    console.log(`CHECK OPERATION: ${input}`);
    if (operation == 0) {
      console.log("an Operator was pressed");

      switch (input) {
        case "+":
          operation = 1;
          appendDisplayContents("+");
          break;
        case "-":
          operation = 2;
          appendDisplayContents("-");
          break;
        case "*":
          operation = 3;
          appendDisplayContents("x");
          break;
        case "/":
          operation = 4;
          appendDisplayContents("÷");
          break;
      }
    } else {
      //NOP
      console.log("[WARNING] an Operator is pressed but operation!=0");
    }
  } else {
    if (input == "c") {
      console.log("CLEAR ALL");
      clearDisplay();
    } else {
      if (operation == 0) {
        Val1 += input;
      } else {
        Val2 += input;
      }
      appendDisplayContents(input);
    }
  }
}

function appendDisplayContents(newValue) {
  console.log("flag");
  display.value += newValue;
}

function clearDisplay() {
  display.value = " ";
  Val1 = "";
  Val2 = "";
  operation = 0;
  answer = 0;
}

function Calculate() {
  console.log(
    `"CALCULATE!\nValue1: ${Val1}\nValue2: ${Val2}\nOperation: ${operation}"`
  );

  switch (operation) {
    case 1:
      answer = Number(Val1) + Number(Val2);
      break;
    case 2:
      answer = Number(Val1) - Number(Val2);
      break;
    case 3:
      answer = Number(Val1) * Number(Val2);
      break;
    case 4:
      answer = Number(Val1) / Number(Val2);
  }

  console.log(`Answer=${answer}`);
  display.value = "ans: " + answer;
}

function isOperator(WhichInput) {
  console.log(`Checking if ${WhichInput} is an operator`);
  if (
    WhichInput == "/" ||
    WhichInput == "*" ||
    WhichInput == "-" ||
    WhichInput == "+"
  ) {
    return true;
  } else {
    return false;
  }
}
