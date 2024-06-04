function solution(num_list) {
  let answer = 0;
  for (let number of num_list) {
    while (number !== 1) {
      if (number % 2) {
        number = (number - 1) / 2;
      } else {
        number /= 2;
      }
      answer++;
    }
  }
  return answer;
}