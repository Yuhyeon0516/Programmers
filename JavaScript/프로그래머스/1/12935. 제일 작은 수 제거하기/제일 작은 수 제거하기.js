function solution(arr) {
  const min = Math.min(...arr);
  const index = arr.indexOf(min);
  const answer = [...arr.slice(0, index), ...arr.slice(index + 1)];

  return answer.length ? answer : [-1];
}