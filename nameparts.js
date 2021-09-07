"use strict";

// const fullNameAlso = "Malthe Kusk Lauritsen";
// const fullName = "Malthe Vincent Worning Kusk Lauritsen";

// const fullname = `Harry James Potter`;

const fullname = `aLbuS PerCiVal WulfRic BriAn duMbleDore`;

const result = getNameParts(fullname);

const newResult = fullName(
  result.lastName,
  result.firstName,
  result.middleName
);

function getNameParts(fullname) {
  const firstName = capitalise(fullname.substring(0, fullname.indexOf(" ")));
  const middleName = fullname
    .substring(fullname.indexOf(" ") + 1, fullname.lastIndexOf(" "))
    .split(" ")
    .map((middle) => {
      return capitalise(middle);
    })
    .join(" ");
  const lastName = capitalise(
    fullname.substring(fullname.lastIndexOf(" ") + 1)
  );

  return {
    firstName,
    middleName,
    lastName,
  };
}

// let full = fullName("Potter", "Harry", "James", "ajsdolajsldæa");

function fullName(lastName, firstName, middleName) {
  if (middleName === undefined) {
    return {
      firstName,
      lastName,
    };
  } else {
    return {
      firstName,
      middleName,
      lastName,
    };
  }
}

function capitalise(str) {
  return str[0].toUpperCase() + str.substring(1).toLowerCase();
}
