function getGcd(a, b) {
  return a % b == 0 ? b : getGcd(b, a % b);
}

function solution(a, b) {
  const gcd = getGcd(a, b);
  let bdenom = b / gcd;
  let factor = [];

  for (let i = 2; i <= bdenom; i++) {
    while (bdenom % i == 0) {
      bdenom /= i;
      factor.push(i);
    }
  }

  return [...factor].filter((value) => !(value === 2 || value === 5)).length
    ? 2
    : 1;
}