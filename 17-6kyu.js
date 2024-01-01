function comp(array1, array2) {
  // Проверка на случай, если один из массивов является null
  if (!array1 || !array2) {
    return false;
  }

  // Возведение каждого элемента второго массива в квадрат
  const squaredArray2 = array2.map((num) => Math.sqrt(num));

  // Сортировка обоих массивов
  const sortedArray1 = array1.sort((a, b) => a - b);
  const sortedArray2 = squaredArray2.sort((a, b) => a - b);

  // Сравнение отсортированных массивов
  return JSON.stringify(sortedArray1) === JSON.stringify(sortedArray2);
}
