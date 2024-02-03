function calculateCircleArea(radius) {
  const PI = Math.PI;
  const area = PI * radius * radius;
  return area;
}

function calculateRectangleArea(length, width) {
  return length * width;
}

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
  if (b == 0) {
    return "Math error";
  }

  return a / b;
}


/*
 * (a): The scope of a const variable is block scope. That means that the
 * variable is only accessible within the block in which it was declared.
 * Example: If a const variable was declared within the if-block then the
 * variable would be accessible within that if-block.
 *
 * (b): The let and const keywords were added to JavaScript as part of the
 * ECMAScript 6 (ES6) specification in 2015.
 */

const RADIUS = 4;
const LENGTH = 20;
const WIDTH = 15;

console.log("Circle area: ", calculateCircleArea(RADIUS));
console.log("Addition operation: ", add(5, 3));
console.log("Subtract operation: ", subtract(10, 2));
console.log("Multiply operation: ", multiply(4, 7));
console.log("Divide operation: ", divide(9, 3));
console.log("Rectangle area: ", calculateRectangleArea(WIDTH, LENGTH));
