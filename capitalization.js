"use strict";

const name = "mAlThE";
capitalise("mAlThE");

function capitalise(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

const fullName = "mAltHe Kusk Lauritsen";

// let firstName = fullName.substring(0, fullName.indexOf(" "));
// firstName = capitalise(firstName);

const firstName = capitalise(fullName.substring(0, fullName.indexOf(" ")));

//capitalise(firstName);

console.log(firstName);
