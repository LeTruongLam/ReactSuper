// const pFunc = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Looix roi");
//     }, 0);
//   });
// const value = pFunc()
//   .then((value) => {
//     console.log(value);
//     return 100;
//   })
//   .catch((error) => {
//     console.error(error);
//     return 0;
//   })
//   .finally(() => {
//     console.warn("ket thuc");
//   });
// value.then((value) => {
//   console.log(value);
// });

/**
 * Async / await
 * await chi su dung duoc trong async func
 * chi dung async , await voi promise
 */

const p2Func = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("!Ok");
    }, 0);
  });
const handle = async () => {
  try {
    const value = await p2Func();
    console.log(value);
  } catch (error) {
    console.warn(error);
  } finally {
    console.log("Hello");
  }
};
handle();
