"use strict";
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const apiUrl = "https://api.escuelajs.co/api/v1";
function callApi(urlApi, callback) {
    let xhttp = new XMLHttpRequest();
    xhttp.open("GET", urlApi, true); //Open connection
    xhttp.onreadystatechange = function (event) {
        if (xhttp.readyState === 4) {
            if (xhttp.status === 200) {
                callback(JSON.parse(xhttp.responseText));
            }
            else {
                callback("Error");
            }
        }
    };
    xhttp.send();
}
//Callback hell
callApi(`${apiUrl}/products`, (error1, data1) => {
    var _a;
    if (error1)
        return console.log(error1);
    callApi(`${apiUrl}/products/${(_a = data1[0]) === null || _a === void 0 ? void 0 : _a.id}`, (error2, data2) => {
        if (error2)
            return console.log(error2);
        console.log(data1);
        console.log(data2);
    });
});
//Calling API with promises
