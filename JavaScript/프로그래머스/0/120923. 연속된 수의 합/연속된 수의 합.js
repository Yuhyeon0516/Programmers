function solution(num, total) {
  var answer = [];
  if (num % 2) {
    answer.push(total / num);
  } else {
    answer.push(Math.floor(total / num));
    answer.push(answer[0] + 1);
  }
  while (answer.length !== num) {
    answer.push(answer.at(-1) + 1);
    answer.unshift(answer[0] - 1);
  }

  return answer;
}