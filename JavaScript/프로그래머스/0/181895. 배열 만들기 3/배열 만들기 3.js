function solution(arr, intervals) {
  let answer = [];
  for (let [start, end] of intervals) {
    answer.push(...arr.slice(start, end + 1));
  }
  return answer;
}