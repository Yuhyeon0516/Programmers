function solution(food) {
  let answer = "0";
  for (let i = food.length - 1; i > 0; i--) {
    answer =
      String(i).repeat(Math.floor(food[i] / 2)) +
      answer +
      String(i).repeat(Math.floor(food[i] / 2));
  }
  return answer;
}