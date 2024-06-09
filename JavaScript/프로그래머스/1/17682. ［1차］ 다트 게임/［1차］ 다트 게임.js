function solution(dartResult) {
  let answer = [];
  const splitedResult = dartResult.split("");
  let result = 0;
  for (let word of splitedResult) {
    if (isNaN(word)) {
      // 숫자로 변환할 수 없을떄
      // 이때는 S,D,T,*,# 중 하나일것
      const answerLength = answer.length;
      switch (word) {
        case "S":
          answer.push(result);
          result = 0;
          break;
        case "D":
          answer.push(Math.pow(result, 2));
          result = 0;
          break;
        case "T":
          answer.push(Math.pow(result, 3));
          result = 0;
          break;
        case "*":
          if (answerLength - 1 >= 0) answer[answerLength - 1] *= 2;
          if (answerLength - 2 >= 0) answer[answerLength - 2] *= 2;
          break;
        case "#":
          if (answerLength - 1 >= 0) answer[answerLength - 1] *= -1;
          break;
      }
    } else {
      // 숫자로 변환이 가능 할 때
      result *= 10;
      result += Number(word);
    }
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
}