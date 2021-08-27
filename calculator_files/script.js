"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#calculate").addEventListener("click", calculate);
});

let number1 = document.querySelector("#firstnumber");
let number2 = document.querySelector("#secondnumber");
let operator;
let result;

function calculate() {
  //Get operator
  operator = document.querySelector("#operator").value;

  //Calculate result
  if (operator == "add") {
    result = parseInt(number1.value) + parseInt(number2.value);
  } else if (operator == "sub") {
    result = parseInt(number1.value) - parseInt(number2.value);
  } else if (operator == "mul") {
    result = parseInt(number1.value) * parseInt(number2.value);
  } else if (operator == "div") {
    result = parseInt(number1.value) / parseInt(number2.value);
  }

  //Post result as value of first input
  number1.value = result;
}
