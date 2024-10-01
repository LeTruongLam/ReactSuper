/*
    Destructuring
*/

// const list = [
//   1,
//   "lam",
//   function (a, b) {
//     return a + b;
//   },
// ];

// const [a, b, c] = list;
// console.log(a);
// console.log(b);
// console.log(c(1,4));

/*
   Spread Syntax
*/
const user = {
  name: "Lam",
  age: 24,
  status: ["Coding"],
};
// const newUser = user;
// console.log(newUser === user); // true cùng tham chiếu đến 1 vùng nhớ

// Shallow copy (copy nông)
// Là có các phần tử y hệt obj cũ nhưng lại không bằng
// const newUser = { ...user }; tạo 1 obj mới nên tham chiếu khác 1 vùng nhớ
// console.log(newUser === user); false

/*
    Rest parameter
*/

// const handle = (a, b, ...c) => {
//   return c;
// };
// const test = handle(1, 2, { number: 4, age: 5 }, { name: "Lam" });
// console.log(test);

const handle = ({ a, b, ...c }) => {
  return c;
};
const test = handle({ a: 4, b: 5, g: "Lam", d: 10 });
console.log(test);
