import fetch from "node-fetch";
const apiUrl = "https://api.escuelajs.co/api/v1";

function fetchData(urlApi)
{
    return fetch(urlApi)
}

fetchData(`${apiUrl}/products`)
.then(response => response.json())
.then(products => console.log(products))
.catch(error => console.log(error))