function solution(answers) {
  let answer = [];
  let scoreArr = [0, 0, 0];
  const answerRule = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];
  scoreArr[0] = answers.filter(
    (value, index) => value === answerRule[0][index % answerRule[0].length]
  ).length;
  scoreArr[1] = answers.filter(
    (value, index) => value === answerRule[1][index % answerRule[1].length]
  ).length;
  scoreArr[2] = answers.filter(
    (value, index) => value === answerRule[2][index % answerRule[2].length]
  ).length;
  const maxScore = Math.max(...scoreArr);
  scoreArr.forEach((value, index) => {
    if (value === maxScore) {
      answer.push(index + 1);
    }
  });

  return answer;
}