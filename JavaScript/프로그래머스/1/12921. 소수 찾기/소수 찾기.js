function solution(n) {
  let answer = [];
  for (let i = 2; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) count += 1;
        else count += 2;
      }
      if (count > 2) break;
    }
    if (count === 2) answer.push(i);
  }
  return answer.length;
}