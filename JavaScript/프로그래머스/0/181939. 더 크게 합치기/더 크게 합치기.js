function solution(a, b) {
  return Math.max(
    a * Math.pow(10, Number(b.toString().length)) + b,
    b * Math.pow(10, Number(a.toString().length)) + a,
  );
}