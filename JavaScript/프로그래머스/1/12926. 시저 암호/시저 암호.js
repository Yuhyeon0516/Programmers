function solution(s, n) {
  let answer = "";
  for (let word of s) {
    const asciiCode = word.charCodeAt();
    const calAsciiCode = asciiCode + n;
    if (word === " ") {
      answer += word;
    } else {
      answer += String.fromCharCode(
        calAsciiCode -
          ((calAsciiCode >= 91 && asciiCode <= 90) ||
          (calAsciiCode >= 123 && asciiCode <= 122)
            ? 26
            : 0)
      );
    }
  }
  return answer;
}