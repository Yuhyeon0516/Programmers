function solution(s) {
  let answer = new Set();
  for (let word of s) {
    if ([...s].filter((value) => value === word).length === 1) {
      answer.add(word);
    }
  }
  return [...answer].sort().join("");
}