function solution(number) {
  let answer = 0;
  const splitednumber = number.split("");
  for (let word of splitednumber) {
    answer += Number(word);
  }

  return answer % 9;
}