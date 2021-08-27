"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  document.querySelector("#calculate").addEventListener("click", calculate);
});

let number1 = document.querySelector("#firstnumber");
let number2 = document.querySelector("#secondnumber");
let result;

function calculate() {
  console.log("calculating");

  result = parseInt(number1.value) + parseInt(number2.value);

  number1.value = result;
  console.log(result);
}
