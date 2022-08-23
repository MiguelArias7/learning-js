import fetch from 'node-fetch';
const apiUrl = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
}

const newProduct = {
  title: 'Test',
  price: 10,
  description: 'A description',
  categoryId: 1,
  images: ['https://i.ytimg.com/vi/0-cpkGRPHrU/maxresdefault.jpg'],
};

postData(`${apiUrl}/products`, newProduct)
  .then((serverResponse) => serverResponse.json())
  .then((data) => console.log(data));
