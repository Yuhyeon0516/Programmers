function ncr(value) {
  if (value === 0) return 1;

  return value * ncr(value - 1);
}
function solution(balls, share) {
  return Math.round(ncr(balls) / ncr(balls - share) / ncr(share));
}