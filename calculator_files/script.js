"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#calculate").addEventListener("click", calculate);
});

const checkbox = document.querySelector("#doround");
const results = document.querySelector("#results");
const number1 = document.querySelector("#firstnumber");
const number2 = document.querySelector("#secondnumber");
let operator;
let result;
let rounding;
let resultValue;

function calculate() {
  //Get operator
  operator = document.querySelector("#operator").value;

  //Calculate result based on given operation
  if (operator == "add") {
    resultValue = parseInt(number1.value) + parseInt(number2.value);
  } else if (operator == "sub") {
    resultValue = parseInt(number1.value) - parseInt(number2.value);
  } else if (operator == "mul") {
    resultValue = parseInt(number1.value) * parseInt(number2.value);
  } else if (operator == "div") {
    resultValue = parseInt(number1.value) / parseInt(number2.value);
  }

  if (checkbox.checked === true) {
    //Get amound of decimals to round to
    rounding = parseInt(document.querySelector("#decimals").value);

    //Change the result based on number of decimals rounded to
    resultValue = resultValue.toFixed(rounding);
  }

  //Post result as value of first input
  number1.value = resultValue;

  //Append to list of results
  result = document.createElement("li");
  result.textContent = resultValue;
  results.appendChild(result);
  results.scrollTop = results.scrollHeight;
}
