"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  loop();
});

function loop() {
  // ---------------- From 0 to 9
  //   for (let counter = 0; counter < 10; counter++) {
  //     console.log(counter);
  //   }
  // ---
  // ---------------- From 1 to 10
  //   for (let counter = 1; counter < 11; counter++) {
  //     console.log(counter);
  //   }
  // ---------------- From 10 to 0 + liftoff
  //   for (let counter = 10; counter > -1; counter--) {
  //     console.log(counter);
  //     if (counter === 0) {
  //       console.log("liftoff");
  //     }
  //   }
  // ---------------- From 1 to 19, only odd numbers
  //   for (let counter = 1; counter < 20; counter += 2) {
  //     console.log(counter);
  //   }
  // ---------------- From 1 to 16777216 but doubling
  //   for (let counter = 1; counter < 16777217; counter = counter * 2) {
  //     console.log(counter);
  //   }
  // ---------------- From 111 to 138 in steps of 3
  //   for (let counter = 111; counter < 139; counter += 3) {
  //     console.log(counter);
  //   }
  // ---------------- From 100 to 0 in steps of 10
  //   for (let counter = 100; counter > -1; counter -= 10) {
  //     console.log(counter);
  //   }
}
