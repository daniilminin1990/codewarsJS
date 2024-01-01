decodeMorse = function (morseCode) {
  function decodeMorseLetter(letter) {
    return MORSE_CODE[letter];
  }
  function decodeMorseWord(word) {
    return word.split(" ").map(decodeMorseLetter).join("");
  }
  return morseCode.trim().split("   ").map(decodeMorseWord).join(" ");
};

// Example usage:
const morseCode = ".... . -.--   .--- ..- -.. .";
const decodedMessage = decodeMorse(morseCode);
console.log(decodedMessage); // Output: "HEY JUDE"
