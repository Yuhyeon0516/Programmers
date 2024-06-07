function solution(n, m, section) {
  let answer = 0;
  let fillSections = new Array(n).fill(true);
  for (let i = 0; i < section.length; i++) fillSections[section[i] - 1] = false;

  for (i = 0; i < fillSections.length; i++) {
    if (!fillSections[i]) {
      answer++;
      i = i + m - 1;
    }
  }
  return answer;
}