function solution(n, t, m, p) {
  let answer = "";
  let count = 1;
  let number = 0;
  let splitedNumber = [];

  while (answer.length < t) {
    if (!splitedNumber.length) {
      splitedNumber = number.toString(n).split("");
      number++;
    }

    const word = splitedNumber.shift();

    if (count % m === p % m) {
      answer += word.toUpperCase();
    }

    count++;
  }
  return answer;
}