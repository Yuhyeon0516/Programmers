function solution(num) {
  let answer = 0;
  while (1) {
    if (answer >= 500) return -1;
    if (num === 1) return answer;
    answer++;
    if (num % 2) num = num * 3 + 1;
    else num /= 2;
  }
}