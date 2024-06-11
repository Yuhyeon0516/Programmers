function solution(n) {
  let answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    answer.push((answer.at(-2) + answer.at(-1)) % 1234567);
  }

  return answer.at(-1);
}