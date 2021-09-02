"use strict";

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");
});

// const person1 = {
//   firstName: "Peter",
//   age: 29,
//   student: false,
// };

// const person2 = {
//   firstName: "Malthe",
//   age: 22,
//   student: true,
// };

// console.log(person1);
// console.log(person1.lastName);

// person1.lastName = "Lind";

// console.log(person1);
// console.log(person1.lastName);

// person1.lastName = undefined;

// console.log(person1.lastName);
// console.log(person1.middleName);

// delete person1.lastName;

// console.log(person1.lastName);

// person1.age++;

// console.log(person1);

// person1 = person2;

// const person2 = person1;

// person2.firstName = "Malthe";
// console.log(person1.firstName);

// let person3 = person1;
// console.log(person1, person2, person3);

let person1 = {
  firstName: "Peter",
  age: 29,
  student: false,
};

let person2 = {
  firstName: "Malthe",
  age: 22,
  student: true,
};

let person3 = person1;

person3.firstName = "Changed";

console.log(person1);
console.log(person2);
console.log(person3);

person3 = person2;

console.log(person1);
console.log(person2);
console.log(person3);

person2.firstName = "Also changed";

console.log(person1);
console.log(person2);
console.log(person3);

person1 = person3;

console.log(person1);
console.log(person2);
console.log(person3);

const student1 = {
  firstName: "Harry",
  lastName: "Potter",
};

const student2 = {
  firstName: "Harry",
  lastName: "Potter",
};

if (student1 == student2) {
  console.log("Same");
} else {
  console.log("Not same");
}

student1.firstName = "Potty";

console.log(student1);
console.log(student2);

student1.firstName = student2.firstName;
student1.lastName = student2.lastName;

console.log(student1);
console.log(student2);

if (student1 == student2) {
  console.log("Same");
} else {
  console.log("Not same");
}
