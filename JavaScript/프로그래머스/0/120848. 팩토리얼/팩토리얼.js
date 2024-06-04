function solution(n) {
  let answer = 1;
  let factorial = 1;
  while (1) {
    factorial *= answer;
    if (n === factorial) {
      return answer;
    } else if (n < factorial) {
      return answer - 1;
    }

    answer += 1;
  }
  return answer;
}