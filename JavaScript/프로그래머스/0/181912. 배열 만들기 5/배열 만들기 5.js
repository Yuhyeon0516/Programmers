function solution(intStrs, k, s, l) {
  var answer = [];
  intStrs.forEach((value) => {
    const num = Number(value.slice(s, s + l));
    if (num > k) {
      answer.push(num);
    }
  });
  return answer;
}