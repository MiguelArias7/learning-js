import fetch from 'node-fetch';
const apiUrl = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

// fetchData(`${apiUrl}/products`)
//   .then((response) => response.json())
//   .then((products) => console.log(products))
//   .catch((error) => console.log(error));

fetchData(`${apiUrl}/products`)
  .then((response) => response.json())
  .then((products) => {
    // console.log(products);
    return fetchData(`${apiUrl}/products/${products[0].id}`);
  })
  .then((response) => response.json())
  .then((product) => console.log(product))
  .catch((error) => console.log(error));
