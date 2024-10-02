// fetch("https://reqres.in/api/users/23")
//   .then((res) => {
//     if (res.oke) {
//       return res.json();
//     } else {
//       throw new Error("Loi");
//     }
//   })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const { default: axios } = require("axios");

// axios({
//   method: "get",
//   user: "/users",
//   baseUrl: "https://reqres.in/api",
// })
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

/**
 * Tạo instance
 *
 *
 * */
const http = axios.create({
  baseUrl: "https://reqres.in/api",
});
http
  .get("/user/2")
  .then((res) => {
    console.log(res.data);
  })
  .catch((error) => {
    console.log(error);
  });
http.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
