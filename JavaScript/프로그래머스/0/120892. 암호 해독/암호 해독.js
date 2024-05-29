function solution(cipher, code) {
  var answer = "";
  for (let i = 0; i < cipher.length; i++) {
    if (!((i + 1) % code)) {
      answer += cipher[i];
    }
  }
  return answer;
}