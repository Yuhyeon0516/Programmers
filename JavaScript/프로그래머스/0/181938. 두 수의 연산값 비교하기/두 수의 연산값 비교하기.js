function solution(a, b) {
  var newCalculation = a * Math.pow(10, Number(b.toString().length)) + b;

  return newCalculation >= 2 * a * b ? newCalculation : 2 * a * b;
}