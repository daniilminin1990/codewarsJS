// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
let str = "String";
function doubleChar(str) {
  return [str.split("").map((letter) => [letter, letter])].flat(2).join("");
}

// Другой вариант
function doubleChar1(str) {
  return str
    .split("")
    .map((letter) => letter + letter)
    .join("");
}

console.log(doubleChar(str));
console.log(doubleChar1(str));
