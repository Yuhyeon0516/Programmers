function solution(my_string) {
  var answer = "";

  for (let i = 0; i < my_string.length; i++) {
    const asciiCode = my_string[i].charCodeAt();

    if (asciiCode < 91) {
      answer += String.fromCharCode(asciiCode + 32);
    } else {
      answer += String.fromCharCode(asciiCode - 32);
    }
  }

  return answer;
}