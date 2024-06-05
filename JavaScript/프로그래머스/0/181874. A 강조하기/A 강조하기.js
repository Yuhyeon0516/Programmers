function solution(myString) {
  var answer = "";
  for (let string of myString) {
    if (string === "a") {
      answer += "A";
    } else if (string === "A") {
      answer += "A";
    } else {
      answer += string.toLowerCase();
    }
  }
  return answer;
}