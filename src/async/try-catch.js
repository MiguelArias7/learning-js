import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

async function obtainFakeApiData(apiUrl) {
  try {
    const products = await fetchData(`${API}/products`);
    // console.log(products);
    const product = await fetchData(`${API}/products/${products[0].id}`);
    // console.log(product);
  } catch (error) {
    console.log(error);
  }
}

obtainFakeApiData(API);
