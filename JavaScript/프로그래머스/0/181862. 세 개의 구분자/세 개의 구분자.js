function solution(myStr) {
  var answer = myStr
    .replaceAll("a", " ")
    .replaceAll("b", " ")
    .replaceAll("c", " ")
    .split(" ")
    .filter((value) => value);
  return answer.length ? answer : ["EMPTY"];
}