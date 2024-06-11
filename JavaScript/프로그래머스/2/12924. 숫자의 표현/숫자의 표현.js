function solution(n) {
  let answer = 0;
  let number = 0;
  for (let i = 1; i <= n; i++) {
    number += i;
    if (n - number < 0) break;
    if ((n - number) % i === 0) answer++;
  }
  return answer;
}