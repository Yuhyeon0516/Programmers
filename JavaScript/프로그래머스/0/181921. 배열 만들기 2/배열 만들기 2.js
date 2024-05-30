function solution(l, r) {
  var answer = [];
  for (let i = l; i < r; i++) {
    if (!String(i).replaceAll("5", "").replaceAll("0", "").length) {
      answer.push(i);
    }
  }
  return answer.length ? answer : [-1];
}