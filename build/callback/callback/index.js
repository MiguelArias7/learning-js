"use strict";
// const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
// const apiUrl = "https://api.escuelajs.co/api/v1";
// function callApi(urlApi: string, callback: Function) {
//   let xhttp = new XMLHttpRequest();
//   xhttp.open("GET", urlApi, true); //Open connection
//   xhttp.onreadystatechange = function (event) {
//     if (xhttp.readyState === 4) {
//       if (xhttp.status === 200) {
//         callback(JSON.parse(xhttp.responseText));
//       } else {
//         callback("Error");
//       }
//     }
//   };
//   xhttp.send();
// }
// //Callback hell
// callApi(`${apiUrl}/products`, (error1: Error, data1: string) => {
//   if (error1) return console.log(error1);
//   callApi(
//     `${apiUrl}/products/${data1[0]?.id}`,
//     (error2: Error, data2: string) => {
//       if (error2) return console.log(error2);
//       console.log(data1);
//       console.log(data2);
//     }
//   );
// });
// //Calling API with promises
