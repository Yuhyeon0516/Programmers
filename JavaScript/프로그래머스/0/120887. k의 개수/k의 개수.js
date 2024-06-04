function solution(i, j, k) {
  let answer = 0;
  for (let index = i; index <= j; index++) {
    answer += [...String(index)].filter((value) => value === String(k)).length;
  }
  return answer;
}