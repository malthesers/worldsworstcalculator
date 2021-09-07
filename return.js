"use strict";

const result = greeting("Peter");
console.log(result);

function greeting(firstName) {
  return `Hello ${firstName}`;
}

// What happens if:
// ----------------

// The function is just called: greeting("any name");
// Unexpected string error

// The function is called in a console.log: console.log(greeting("any name"))
// It returns "Hello any name"

// The function is called without any parameter
// It returns "Hello undefined"

// The function is called inside a template literal;
// It returns the result inside the template literal "Greeting is Hello a name"

// The function is called "manually" from the console (where is the return-value?)
// Nowhere

// … other things we can try … ?
//
