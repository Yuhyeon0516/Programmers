function solution(s) {
  for (let word of s) {
    if (isNaN(Number(word))) return false;
  }
  return (s.length === 4 || s.length === 6);
}