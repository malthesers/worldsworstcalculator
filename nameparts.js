"use strict";

const fullNameAlso = "Malthe Kusk Lauritsen";
const fullName = "Malthe Vincent Worning Kusk Lauritsen";

const firstName = fullName.substring(0, fullName.indexOf(" "));
const middleName = fullName.substring(
  fullName.indexOf(" ") + 1,
  fullName.lastIndexOf(" ")
);
const lastName = fullName.substring(fullName.lastIndexOf(" ") + 1);

console.log(`First name: ${firstName}`);
console.log(`Middle name(s): ${middleName}`);
console.log(`Last name: ${lastName}`);
