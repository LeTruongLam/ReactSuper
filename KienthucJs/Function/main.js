// Callback : là 1 tham số nhưng tham số này là 1 func
// const nums = [1, 2, 3, 4, 5];
// const callback = (item, index) => {
//   console.log(`STT ${index} la ${item}`);
// };
// nums.forEach(callback);

//Currying : func return func

// function findNumber(num) {
//   return function (func) {
//     const result = [];
//     for (let i = 0; i <= num; i++) {
//       if (func(i)) {
//         result.push(i);
//       }
//     }
//     return result;
//   };
// }
// const value = findNumber(10)((number) => number % 2 === 0);
// console.log(value)
