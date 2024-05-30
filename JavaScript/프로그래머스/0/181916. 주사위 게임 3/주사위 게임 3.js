function solution(a, b, c, d) {
  const dices = [a, b, c, d];
  const countOfDices = dices.reduce((accumulator, currentValue) => {
    accumulator[currentValue - 1] = (accumulator[currentValue - 1] ?? 0) + 1;
    return accumulator;
  }, new Array(6));
  const sortedCountOfDices = [...countOfDices].sort((a, b) => b - a);

  switch (sortedCountOfDices[0]) {
    case 4:
      return a * 1111;

    case 3:
      const p = countOfDices.indexOf(sortedCountOfDices[0]) + 1;
      const q = countOfDices.indexOf(sortedCountOfDices[1]) + 1;
      return Math.pow(10 * p + q, 2);

    case 2:
      if (sortedCountOfDices.at(1) === 2) {
        const p = countOfDices.indexOf(sortedCountOfDices[0]) + 1;
        const q = countOfDices.lastIndexOf(sortedCountOfDices[1]) + 1;

        return (p + q) * Math.abs(p - q);
      } else {
        const q = countOfDices.indexOf(sortedCountOfDices[1]) + 1;
        const r = countOfDices.lastIndexOf(sortedCountOfDices[1]) + 1;

        return q * r;
      }

    default:
      return countOfDices.indexOf(sortedCountOfDices[0]) + 1;
  }
}