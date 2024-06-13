function solution(n) {
  const longJump = [1, 2];
  if (n === 1) return 1;
  for (let i = 2; i < n; i++) {
    longJump.push((longJump[i - 2] + longJump[i - 1]) % 1234567);
  }
  return longJump.at(-1);
}