function solution(sides) {
  let answer = new Set();
  const [short, long] = sides.sort((a, b) => a - b);
  for (let i = long + 1 - short; i <= long; i++) {
    answer.add(i);
  }
  for (let i = long + 1; i < short + long; i++) {
    answer.add(i);
  }
  return answer.size;
}