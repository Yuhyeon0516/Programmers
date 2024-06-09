function solution(s) {
  let answer = 0;
  while (s) {
    let x = s[0];
    let i = 0;
    let matchCount = 0;
    let unmatchCount = 0;
    for (i; i < s.length; i++) {
      if (s[i] === x) {
        matchCount++;
      } else {
        unmatchCount++;
      }

      if (matchCount === unmatchCount) {
        matchCount = 0;
        unmatchCount = 0;
        answer++;
        s = s.slice(i + 1);
        i = 0;
        break;
      }
    }
    if (i === s.length) {
      break;
    }
  }
  return s ? ++answer : answer;
}