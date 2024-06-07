function solution(array, commands) {
  let answer = [];
  commands.forEach((value) => {
    const [i, j, k] = value;
    answer.push(array.slice(i - 1, j).sort((a, b) => a - b)[k - 1]);
  });
  return answer;
}