// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = padWithZero(hours);
  const formattedMinutes = padWithZero(minutes);
  const formattedSeconds = padWithZero(remainingSeconds);

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function padWithZero(number) {
  return number < 10 ? `0${number}` : `${number}`;
}

// Examples
console.log(humanReadable(3662)); // Output: "01:01:02"
console.log(humanReadable(0)); // Output: "00:00:00"
console.log(humanReadable(359999)); // Output: "99:59:59"
