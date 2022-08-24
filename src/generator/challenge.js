import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

async function fetchData(apiUrl) {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
}

async function* gen(apiUrl) {
  yield await fetchData(`${apiUrl}/products`);
  yield await fetchData(`${apiUrl}/products/1`);
}

async function obtainFakeApiData(apiUrl) {
  const g = gen(apiUrl);
  console.log(await g.next());
  console.log(await g.next());
}

obtainFakeApiData(API);
