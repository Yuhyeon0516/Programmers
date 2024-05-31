function solution(my_string) {
  var answer = [];
  for (let i = 65; i <= 90; i++) {
    answer.push(
      [...my_string].filter((value) => value === String.fromCharCode(i)).length
    );
  }
  for (let i = 97; i <= 122; i++) {
    answer.push(
      [...my_string].filter((value) => value === String.fromCharCode(i)).length
    );
  }
  return answer;
}