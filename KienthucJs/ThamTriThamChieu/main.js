//Clone và merge

// clone thường (shallow copy) dùng spread syntax
const user = {
  name: "Join",
  age: 20,
  fullName: {
    first: "Le",
    last: "Lam",
  },
};
const a = { ...user };
a.name = "Hi";
// console.log(a);
// console.log(user);
// Or dùng vòng lặp

// const test = {
//   age: 18,
//   name: "lam",
// };
// let clone = {};
// for (let key in test) {
//   clone[key] = test[key];
// }

// deep clone (deep copy)

const clone = JSON.parse(JSON.stringify(user));
user.fullName = { first: "Truong", last: "Lam" };
console.log(user.fullName);
console.log(clone.fullName);
