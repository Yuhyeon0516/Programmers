function solution(arr) {
  let answer = [];
  let lastNum = -1;
  for (let num of arr) {
    if (lastNum !== num) answer.push(num);
    lastNum = num;
  }
  return answer;
}