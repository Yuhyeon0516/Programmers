function solution(arr, queries) {
  let answer = [...arr];
  for (let query of queries) {
    const [s, e] = query;
    for (let i = s; i <= e; i++) {
      answer[i] += 1;
    }
  }
  return answer;
}