document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  let firstName = `OJ`;
  let lastName = `J`;
  let animalType = `penguin`;
  let animalName = `Henning`;

  //sayHello(lastName, firstName);
  presentPet(`firstName`, animalType, animalName);
});

function sayHello(firstName) {
  console.log(`Hello ${firstName}`);
}

let firstName = `Ingvar`;

function presentPet(firstName, animalType, animalName) {
  firstName = `yeeto`;

  console.log(
    `My name is ${firstName}, I have a ${animalType} called ${animalName}`
  );
}

// Some interesting experiments
// ----------------------------

// Can you declare a variable in a function with the same name as a parameter?
// Yes, the value of the newly declared variable take precedence over the similarly named parameter

// Can you have a parameter with the same name as a global variable? But still get a different value?
// Yes, parameter takes precedence over the globally declared variable

// Can you change the value of a parameter inside the function, eg. firstName = "Tom"?
// Yes, it will take precedence over the parameter

// Can you change the value of global variables from inside a function?
// Yes, it will take precedence over the parameter

// Write your own conclusions on these topics:
// -------------------------------------------

// Parameters as variables or strings (or other fixed values) defined directly
// Strings and variables called with the function correspond not to the parameters with the same name
// but according to the order in which they are declared

// Names of variables used when calling
// Strings and variables called with the function correspond not to the parameters with the same name
// but according to the order in which they are declared

// Order of parameters when calling
// Strings and variables called with the function correspond not to the parameters with the same name
// but according to the order in which they are declared

// Number of parameters used when calling
// Variables used for calling are used as parameters up to the number of parameters
// whilst the remainders are left out

// Parameters affecting other variables outside the function?
// They don't

// ---presentPet---
// What happens if:
// ----------------

// The function is called with variables named the same as the parameters?
// It works normally

// The function is called with variables named something different?
// ReferenceError

// The function is called with strings?
// The strings are used parameters for the function

// The function is called with a mix of strings and variables?
// Both are the srings and variables are used as parameters in the respective order

// The function is called with variables, but in a different order?
// The parameters correspond to the order of variables the function is called with

// ---firstName---
// What happens if:
// ---------------

// The function is called on an earlier line than it is created?
// It works normally

// The function is called with a variable called myName?
// It works normally

// There is another variable called firstName outside the function?
// It works normally

// The function is called without any parameter?
// The variable is undefined

// The function is called with firstName and lastName?
// It works normally

// And the function is called with lastName before firstName?
// It logs lastName instead of firstName
