function solution(s) {
  const answer = [];
  const passedTextArr = [];
  for (let word of s) {
    // 지나간 문자에 현재 word가 있다면
    if (passedTextArr.includes(word)) {
      const index = passedTextArr.lastIndexOf(word);
      answer.push(passedTextArr.length - index);
    } else {
      answer.push(-1);
    }
    passedTextArr.push(word);
  }
  return answer;
}