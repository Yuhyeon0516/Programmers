function solution(age) {
  var answer = "";
  for (let word of String(age)) {
    answer += String.fromCharCode(Number(word) + 97);
  }
  return answer;
}