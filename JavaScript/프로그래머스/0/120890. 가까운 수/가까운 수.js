function solution(array, n) {
  return [...array]
    .sort((a, b) => a - b)
    .reduce((accumulator, currentValue) => {
      if (Math.abs(currentValue - n) < Math.abs(accumulator - n)) {
        return currentValue;
      }
      return accumulator;
    }, -Infinity);
}