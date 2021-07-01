"use strict";

// const name = "Vasko";

// function first() {
//   console.log("first function execution...");
//   const a = 1;

//   function second() {
//     console.log("secondFunction is executing...");

//     const b = 2;
//     third();
//   }
//   second();
// }

// first();
// function third() {
//   console.log("third function executing");
//   const c = 3;
//   console.log(c);
// }

// function calcAge(birthYear) {
//
// console.log();
// console.log();console.log();
// console.log()
// console.log,
// console.log()
//   return age;
// }

// const birthYear = 1993;
// console.log(calcAge(birthYear));

// console.log(birthY);
// console.log(bir);
// console.log(bir);

// const calcAge = function (birthYear) {
//   var age = Number(new Date().getFullYear()) - birthYear;

//   if (true) {
//     var b = 0;
//   }
//   console.log(b);
//   console.log(b);
// };

// calcAge(1111);

const pesho = {
  firstName: "Peter",
  lastName: "Petrov",
};

const gosho = {
  firstName: "Georgi",
  // lastName: "Georgiev",
};

const vasko = {
  firstName: "Vasil",
  lastName: "Vasilev",
  friends: [gosho, pesho],

  getName: function () {
    return this.firstName;
  },
  getName2: function () {
    return this.lastName;
  },
};
gosho.getName = vasko.getName2;
console.log(gosho.getName());
