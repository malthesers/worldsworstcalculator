"use strict";

/*^const name = "Peter";
const drink = "Pepsi MAX";

console.log(`Yo ${name}, would you like some ${drink}?`);

const letter = name[0];

console.log(`The first letter of ${name} is ${letter}.`)


const str1 = "    There is      space here   \n    ";
const str2 = str1.trim();

const fullName = "Peter Heronimous Lind";
const firstName = fullName.substring(0,5);
const lastName = fullName.substring(17);
console.log(firstName);
console.log(lastName);
*/

const name = "Albus Percival Wulfric Brian Dumbledore";

console.log(`Characters: ${name.length}`);
console.log(`Index 2: ${name[2]}`);
console.log(`Index 6: ${name[6]}`);
console.log(`Index D: ${name.indexOf(`D`)}`);
console.log(`Index e: ${name.lastIndexOf(`e`)}`);

console.log(`Albus: ${name.substr(0, 5)}`);
console.log(`Dumbledore: ${name.substr(29)}`);
console.log(`Wulfric: ${name.substr(15, 8)}`);
console.log(` Wulfric :_${name.substr(14, 9)}_`);
console.log(`ian: ${name.substr(25, 3)}`);
console.log(`bus: ${name.substr(2, 3)}`);
