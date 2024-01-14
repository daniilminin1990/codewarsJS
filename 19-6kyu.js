/* 
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/

function firstNonRepeatingLetter(inputString) {
  // Преобразуем входную строку к нижнему регистру, чтобы рассматривать символы вне зависимости от регистра
  const lowercaseString = inputString.toLowerCase();

  // Проходим по каждому символу в строке
  for (let i = 0; i < lowercaseString.length; i++) {
    const char = lowercaseString.charAt(i);
    // Проверяем, появляется ли символ только один раз в строке
    if (lowercaseString.indexOf(char) === lowercaseString.lastIndexOf(char)) {
      // Находим соответствующий символ в исходной строке и возвращаем его
      return inputString.charAt(i);
    }
  }

  // Если не найдено неповторяющегося символа, возвращаем пустую строку
  return "";
}

console.log(firstNonRepeatingLetter("sttrreSS"));
