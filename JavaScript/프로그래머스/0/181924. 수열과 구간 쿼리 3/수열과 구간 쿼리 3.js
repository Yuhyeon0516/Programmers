function solution(arr, queries) {
  let answer = [...arr];
  for (let query of queries) {
    const [i, j] = query;
    const temp = answer[i];
    answer[i] = answer[j];
    answer[j] = temp;
  }
  return answer;
}