"use strict";

const name = "mAlThE";

capitalise(name);

function capitalise(str) {
  const newName = str[0].toUpperCase() + str.substring(1).toLowerCase();
  console.log(newName);
}
