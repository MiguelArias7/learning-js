import fetch from 'node-fetch';
const apiUrl = 'https://api.escuelajs.co/api/v1';

async function fetchData(api) {
  const response = await fetch(api);
  const data = await response.json();
  return data;
}

const fnPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve('Promise has been resolved');
    }
    reject(new Error("There's been an error"));
  });
};

async function fnAsync() {
  const result = await fnPromise();
  console.log(result);
  console.log('End of execution');
}

//Test async and promises
// console.log('Init');
// fnAsync();
// console.log('End');

console.log(await fetchData(`${apiUrl}/products`));
