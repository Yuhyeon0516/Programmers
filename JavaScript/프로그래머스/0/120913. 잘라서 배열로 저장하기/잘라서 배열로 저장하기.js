function solution(my_str, n) {
  var answer = [];
  for (let i = 0; i < my_str.length; i += n) {
    if (i + n > my_str.length) {
      answer.push(my_str.slice(i));
    } else {
      answer.push(my_str.slice(i, i + n));
    }
  }
  return answer;
}