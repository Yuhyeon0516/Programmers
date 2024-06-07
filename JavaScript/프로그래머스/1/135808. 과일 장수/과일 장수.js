function solution(k, m, score) {
  const sortedScore = [...score]
    .sort((a, b) => a - b)
    .filter((value) => value <= k);
  let answer = 0;
  while (sortedScore.length >= m) {
    for (let i = 1; i < m; i++) {
      sortedScore.pop();
    }
    const minPrice = sortedScore.pop();
    answer += minPrice * m;
  }
  return answer;
}