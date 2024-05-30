function solution(n) {
  let answer = new Array(n);
  for (let k = 0; k < answer.length; k++) {
    answer[k] = new Array(n);
  }
  let currentNumber = 1;
  let direction = "+x";
  let i = 0;
  let j = 0;

  while (currentNumber <= n * n) {
    answer[i][j] = currentNumber;
    switch (direction) {
      case "+x":
        j += 1;
        if (j === n || answer[i][j]) {
          i += 1;
          j -= 1;
          direction = "-y";
        }
        break;
      case "-x":
        j -= 1;
        if (j < 0 || answer[i][j]) {
          i -= 1;
          j += 1;
          direction = "+y";
        }
        break;
      case "+y":
        i -= 1;
        if (i < 0 || answer[i][j]) {
          i += 1;
          j += 1;
          direction = "+x";
        }
        break;

      default:
        i += 1;
        if (i === n || answer[i][j]) {
          j -= 1;
          i -= 1;
          direction = "-x";
        }
        break;
    }
    currentNumber += 1;
  }

  return answer;
}