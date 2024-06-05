function solution(my_string) {
  var answer = "";
  let textCameOut = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!textCameOut.includes(my_string[i])) {
      answer += my_string[i];
      textCameOut.push(my_string[i]);
    }
  }
  return answer;
}