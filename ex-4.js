// Start coding here
let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};
function add(a, b) {
  return a + b;
}
function subtract(a, b) {
  return a - b;
}
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}
// Declare the variable
let addResult = calculator.add(10, 20);
let divideResult = calculator.divide(3000, 10);

// Console Log
console.log(addResult);
console.log(divideResult);
