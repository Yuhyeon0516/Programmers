function solution(n, a, b) {
  let i;
  for (i = 1; i <= n / 2; i++) {
    if (Math.abs(a - b) === 1 && Math.ceil(a / 2) === Math.ceil(b / 2)) break;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
  }

  return i;
}