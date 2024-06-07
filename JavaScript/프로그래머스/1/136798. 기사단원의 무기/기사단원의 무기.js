function solution(number, limit, power) {
  let answer = 1;
  for (let i = 2; i <= number; i++) {
    let count = 0;
    for (let j = 1; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        if (i / j === j) count += 1;
        else count += 2;
      }
      if (count > limit) {
        count = power;
        break;
      }
    }
    answer += count;
  }
  return answer;
}