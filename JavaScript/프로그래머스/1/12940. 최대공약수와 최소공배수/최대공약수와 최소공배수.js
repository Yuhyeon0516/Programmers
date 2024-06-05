function solution(n, m) {
  let answer = [1, 1];
  const max = Math.max(n, m);
  const min = Math.min(n, m);
  for (let i = 2; i <= min; i++) {
    if (!(n % i) && !(m % i)) answer[0] = i;
  }
  while (1) {
    if (!(answer[1] % n) && !(answer[1] % m)) break;
    answer[1]++;
  }
  return answer;
}