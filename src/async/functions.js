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

console.log('Init');
fnAsync();
console.log('End');
