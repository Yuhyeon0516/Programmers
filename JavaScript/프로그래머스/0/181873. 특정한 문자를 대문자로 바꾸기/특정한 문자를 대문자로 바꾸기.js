function solution(my_string, alp) {
  return my_string.replaceAll(alp, String.fromCharCode(alp.charCodeAt() - 32));
}