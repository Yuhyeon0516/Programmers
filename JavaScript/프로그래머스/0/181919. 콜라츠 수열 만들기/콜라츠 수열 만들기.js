function solution(n) {
  let answer = [];
  while (n !== 1) {
    answer.push(n);
    if (n % 2) n = 3 * n + 1;
    else n /= 2;
  }
  answer.push(1);
  return answer;
}