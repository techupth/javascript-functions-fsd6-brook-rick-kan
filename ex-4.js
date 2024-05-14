let add = (a, b) => {
  return a + b;
};
add = add(10, 20);
console.log(add);

let subtract = (a, b) => {
  return a - b;
};
subtract = subtract(10, 5);
console.log(subtract);

let multiply = (a, b) => {
  return a * b;
};
multiply = multiply(10, 5);
console.log(multiply);

let divide = (a, b) => {
  return a / b;
};
divide = divide(3000, 10);
console.log(divide);

let calculator = {
  add: add,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
};

let addResult = calculator.add;
console.log(addResult);

let divideResult = calculator.divide;
console.log(divideResult);
