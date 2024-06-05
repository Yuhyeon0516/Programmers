function solution(sides) {
  const [short, middle, long] = [...sides].sort((a, b) => a - b);
  if (short + middle > long) return 1;
  return 2;
}