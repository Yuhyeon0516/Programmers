function solution(n) {
  var answer = 1;
  for (let i = 1; i < n; i++) {
    answer += 1;
    while (String(answer).includes("3") || answer % 3 === 0) {
      answer += 1;
    }
  }
  return answer;
}