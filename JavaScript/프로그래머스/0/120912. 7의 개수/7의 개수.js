function solution(array) {
  var answer = 0;
  for (let value of array) {
    answer += String(value)
      .split("")
      .filter((value) => value === "7").length;
  }
  return answer;
}