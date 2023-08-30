/* 
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/

const size = 5;
function stringy(size) {
  let arr = [];
  for (let i = 1; i <= size; i++) {
    if (i % 2) {
      arr.push(1);
    }
    if (i % 2 === 0) {
      arr.push(0);
    }
  }
  return arr.join("");
}
console.log(stringy(size));

// Мой вариант, только string сразу
function stringy0(size) {
  let str = "";
  for (var i = 1; i <= size; i++) str += i % 2;
  return str;
}
console.log(stringy0(size));

// Другой вариант с комментов, padStart
const stringy1 = (x) => "".padStart(x, "10");
console.log(stringy1(4));
