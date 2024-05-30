function solution(score) {
  const averageArray = score.map((value) => (value[0] + value[1]) / 2);
  const sortedAverageArray = [...averageArray].sort((a, b) => b - a);

  return averageArray.map((value) => sortedAverageArray.indexOf(value) + 1);
}