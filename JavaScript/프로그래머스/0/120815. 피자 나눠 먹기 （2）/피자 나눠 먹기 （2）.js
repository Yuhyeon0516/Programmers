function solution(n) {
  var answer = 1;

  while ((answer * 6) % n) {
    answer++;
  }
  return answer;
}