"use strict";

// const fullNameAlso = "Malthe Kusk Lauritsen";
// const fullName = "Malthe Vincent Worning Kusk Lauritsen";

const fullname = `Harry James Potter`;

getNameParts(fullname);

function getNameParts(fullname) {
  const firstName = fullname.substring(0, fullname.indexOf(" "));
  const middleName = fullname.substring(
    fullname.indexOf(" ") + 1,
    fullname.lastIndexOf(" ")
  );
  const lastName = fullname.substring(fullname.lastIndexOf(" ") + 1);

  console.log(firstName, middleName, lastName);

  fullName("Potter", "Harry", "James", "pottypotpot");
}

function fullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    console.log(firstName, lastName);
  } else {
    console.log(firstName, middleName, lastName);
  }
}
