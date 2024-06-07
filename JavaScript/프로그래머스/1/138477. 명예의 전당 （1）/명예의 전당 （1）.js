function solution(k, score) {
  let answer = [];
  score.forEach((_, index) => {
    answer.push(
      [...score]
        .slice(0, index + 1)
        .sort((a, b) => b - a)
        .slice(0, k)
        .at(-1)
    );
  });
  return answer;
}