function solution(n) {
  const sqrt = Math.sqrt(n);
  if (!(sqrt % 1)) return Math.pow(sqrt + 1, 2);
  return -1;
}