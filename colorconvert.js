"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  let RGB = hexToRGB("#c0ffee");

  console.table(RGB);
});

function hexToRGB(hex) {
  let r = parseInt(hex.substring(1, 3), 16);
  let g = parseInt(hex.substring(3, 5), 16);
  let b = parseInt(hex.substring(5), 16);

  return {
    r: r,
    g: g,
    b: b,
  };
}
