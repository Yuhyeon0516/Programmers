function solution(arr) {
  var answer = [...arr];
  let power = 2;

  while (1) {
    if (answer.length === power || answer.length === 1) break;
    else if (answer.length > power) power *= 2;
    else {
      answer.push(0);
    }
  }

  return answer;
}