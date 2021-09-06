"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
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

function rgbToHex(rgb) {
  let r = rgb.r.toString(16);
  let g = rgb.g.toString(16);
  let b = rgb.b.toString(16);

  return `#${r}${g}${b}`;
}
