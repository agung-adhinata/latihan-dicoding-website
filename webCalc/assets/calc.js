"use strict";

console.log("test, this is work?");

const calc = {
  displyNum: "0",
  operator: null,
  firstNum: null,
  waitingSecondNum: false,
};

function updateDisplay() {
  document.querySelector("#displayNum").innerText = calc.displyNum;
}

function inverseNum() {
  if (calc.displyNum === "0") {
    return;
  }
  calc.displyNum = calc.displyNum * -1;
}

function handleOperator(operator) {
  if (!calc.waitingSecondNum) {
    calc.operator = operator;
    calc.waitingSecondNum = true;
    calc.firstNum = calc.displyNum;

    //reset display num
    calc.displyNum = "0";
  }
}

function performCalculation() {
  

  if (calc.firstNum === null || calc.operator === null) {
    return;
  }
  let result = 0;
  if (calc.operator === "+") {
    result = parseInt(calc.firstNum) + parseInt(calc.displyNum);
  } else {
    result = parseInt(calc.firstNum) - parseInt(calc.displyNum);
  }

  const history = {
    firstNum: calc.firstNum,
    secondNum: calc.displyNum,
    operator: calc.operator,
    result: result
  }

  putHistory(history)

  calc.displyNum = result;
  //reset operator
  calc.firstNum = result;
  calc.operator = null;
  calc.waitingSecondNum = false;
  renderHistory()
}

function clearCalc() {
  calc.displyNum = "0";
  calc.operator = null;
  calc.firstNum = null;
  calc.waitingSecondNum = false;
}

function inputDigit(digit) {
  if (calc.displyNum == 0) {
    calc.displyNum = digit;
    return;
  }
  calc.displyNum += digit;
}

const buttons = document.querySelectorAll(".button");
for (let btn of buttons) {
  btn.addEventListener("click", (event) => {
    // mendapatkan objek elemen yang diklik
    const target = event.target;

    if (target.classList.contains("clear")) {
      clearCalc();
      updateDisplay();
      console.log("test");
      return;
    }
    if (target.classList.contains("negative")) {
      inverseNum();
      updateDisplay();
      return;
    }

    if (target.classList.contains("equals")) {
      performCalculation();
      updateDisplay();
      return;
    }
    if (target.classList.contains("operator")) {
      handleOperator(target.innerHTML);
      return;
    }

    inputDigit(target.innerText);
    updateDisplay();
  });
}
