/* 
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
 */

// function moveZeros(arr) {
//   let exitArr = arr.filter((el) => el !== 0);
//   for (let i = 0; i <= arr.length; i++) {
//     // console.log(arr[i]);
//     if (arr[i] === 0) {
//       exitArr.push(arr[i]);
//     } else if (arr[i] !== 0) {
//       continue;
//     }
//   }
//   return exitArr;
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

function moveZeros(arr) {
  return [...arr.filter((i) => i !== 0), ...arr.filter((i) => i === 0)];
}
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

/* 
Более короткое и правильное решение
1: 
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
2:
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}
*/
