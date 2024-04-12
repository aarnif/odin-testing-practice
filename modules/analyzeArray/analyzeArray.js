const analyzeArray = (numbers) => {
  if (!numbers.length) {
    return [];
  }

  const arrayLength = numbers.length;
  const arraySum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const arrayAverage = arraySum / arrayLength;
  const arrayMin = Math.min(...numbers);
  const arrayMax = Math.max(...numbers);

  return {
    average: arrayAverage,
    min: arrayMin,
    max: arrayMax,
    length: arrayLength,
  };
};

export default analyzeArray;
