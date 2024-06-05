function solution(arr, idx) {
  const answer = arr.slice(idx).indexOf(1);
  return answer < 0 ? answer : answer + idx;
}