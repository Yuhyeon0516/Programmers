function solution(my_string, n) {
  var answer = "";
  for (let string of my_string) {
    answer += string.repeat(n);
  }
  return answer;
}