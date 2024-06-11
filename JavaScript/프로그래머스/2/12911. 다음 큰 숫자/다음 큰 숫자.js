function solution(n) {
  let answer = n + 1;
  const nToBinaryLength = n
    .toString(2)
    .split("")
    .filter((value) => value === "1").length;
  while (1) {
    if (
      nToBinaryLength ===
      answer
        .toString(2)
        .split("")
        .filter((value) => value === "1").length
    )
      break;
    answer++;
  }
  return answer;
}