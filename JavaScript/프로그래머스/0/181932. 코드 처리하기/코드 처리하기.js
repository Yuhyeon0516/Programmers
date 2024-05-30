function solution(code) {
  let answer = "";
  let mode = 0;

  for (let i = 0; i < code.length; i++) {
    if (code[i] === "1") {
      if (mode) mode = 0;
      else mode = 1;
    } else if (!mode && !(i % 2)) {
      answer += code[i];
    } else if (mode && i % 2) {
      answer += code[i];
    }
  }

  return answer.length ? answer : "EMPTY";
}