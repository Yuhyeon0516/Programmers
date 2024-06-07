function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    const result = Math.floor(n / a) * b;
    answer += result;
    n = result + (n % a);
  }
  return answer;
}