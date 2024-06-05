function solution(n) {
  var answer = [...new Set([1, n])];
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
  }
  return answer.sort((a, b) => a - b);
}