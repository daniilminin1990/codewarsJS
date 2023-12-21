function HQ9(code) {
  function song() {
    let text = "";
    for (let i = 99; i > 0; i--) {
      text += `${i} bottles of beer on the wall, ${i} bottles of beer.\n`;
      if (i > 1) {
        text += `Take one down and pass it around, ${i - 1} bottles of beer on the wall.\n`;
      } else {
        text += `Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`;
      }
    }
    return text;
  }
  if (code === "H") {
    return "Hello World!";
  } else if (code === "Q") {
    return code;
  } else if (code === "9") {
    return song();
  }

  //finish me
}
console.log(HQ9("9"));
