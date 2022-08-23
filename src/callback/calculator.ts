interface definitionInterface {
  (message1: number, message2: number): void;
}

function sum(num1: number, num2: number) {
  return num1 + num2;
}

function rest(num1: number, num2: number) {
  return num1 - num2;
}

function mult(num1: number, num2: number) {
  return num1 * num2;
}

function div(num1: number, num2: number) {
  return num1 / num2;
}

function calc(num1: number, num2: number, callback: definitionInterface) {
  return callback(num1, num2);
}

console.log('Test');
