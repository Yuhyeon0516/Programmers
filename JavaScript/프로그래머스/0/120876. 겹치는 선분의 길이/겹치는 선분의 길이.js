function solution(lines) {
  const startPoint = Math.min(...lines.flat());
  const endPoint = Math.max(...lines.flat());
  const duplicationLines = [...Array(endPoint - startPoint)].fill(0);

  for (let i = 0; i < lines.length; i++) {
    for (let j = lines[i][0]; j < lines[i][1]; j++) {
      duplicationLines[j - startPoint] += 1;
    }
  }

  return duplicationLines.reduce(
    (accumulator, currentValue) =>
      currentValue > 1 ? accumulator + 1 : accumulator,
    0
  );
}