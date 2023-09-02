/* 
In this Kata we are passing a number (n) into a function.

Your code will determine if the number passed is even (or not).

The function needs to return either a true or false.

Numbers may be positive or negative, integers or floats.

Floats with decimal part non equal to zero are considered UNeven for this kata.
*/
// function testEven(n) {
//   if (!Number.isInteger(n)) {
//     return false;
//   } else {
//     return n % 2 === 0;
//   }
// }

// function testEven(n) {
//   return !Number.isInteger(n) ? false : n % 2 === 0;
// }

function testEven(n) {
  return n % 2 === 0;
}

const a = 0;
const b = 0.5;
console.log(testEven(a));
console.log(testEven(b));
