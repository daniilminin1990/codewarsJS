// Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0];
    for (let i = 0; i < args.length; i++) {
      if (args[i] < smallest) {
        smallest = args[i];
      }
    }
    return smallest;
  }
}

const rs = new SmallestIntegerFinder();
console.log(rs.findSmallestInt([78, 56, 232, 12, 8])); // 8

// 2 вариант Math.min + деструктуризация
const arr = [78, 56, 232, 12, 8];

function findSmallestInt2(arr) {
  return Math.min(...arr);
}

console.log(findSmallestInt2(arr)); //

// 3 Вариант - sort
function findSmallestInt3(arr) {
  return arr.sort((a, b) => a - b)[0];
}
console.log(findSmallestInt3(arr));
