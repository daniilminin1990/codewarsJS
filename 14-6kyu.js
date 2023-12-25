function likes(names) {
  // TODO
  const pluralEnding = "like this";
  const soloEnding = "likes this";
  // for (let n = 0; n < 4; n++) {
  //   if (names.n >= 3)
  // }
  let count;
  if (names.length > 3) {
    count = names.length - 2;
    return `${names[0]}, ${names[1]} and ${count} others ${pluralEnding}`;
  } else if (names.length === 3) {
    return `${names[0]}, ${names[1]} and ${names[names.length - 1]} ${pluralEnding}`;
  } else if (names.length === 2) {
    return `${names[0]} and ${names[1]} ${pluralEnding}`;
  } else if (names.length === 1) {
    return `${names[0]} ${soloEnding}`;
  } else if (names.length === 0) {
    return `no one ${soloEnding}`;
  } else {
    return "error";
  }
}
arr = [];
// console.log(arr.length - 2);
console.log(likes(arr));
