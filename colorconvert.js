"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  let cssString = `rgb(192,13,1)`;

  cssToRGB(cssString);
});

function hexToRGB(hex) {
  //Parse integers from hexadecimal to decimal
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5), 16);

  //Return rgb values as decimal
  return {
    r: r,
    g: g,
    b: b,
  };
}

function rgbToHex(rgb) {
  //Convert decimal integers to hexadecimal
  let r = rgb.r.toString(16);
  let g = rgb.g.toString(16);
  let b = rgb.b.toString(16);

  //Return hexcode
  return `#${r}${g}${b}`;
}

function cssToRGB(css) {
  //Create array of the filtered string by removing spaces and commas
  let cssArray = css
    .substring(css.indexOf("(") + 1, css.indexOf(")"))
    .replaceAll(" ", "")
    .split(",");

  //Declare variables as parsed rgb values from array
  let r = parseInt(cssArray[0]);
  let g = parseInt(cssArray[1]);
  let b = parseInt(cssArray[2]);

  //Log rgb values
  console.log(r, g, b);
}
