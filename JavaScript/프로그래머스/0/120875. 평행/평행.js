function calculate(arr1, arr2) {
  return (arr2[1] - arr1[1]) / (arr2[0] - arr1[0]);
}

function solution(dots) {
  const [a,b,c,d] = dots;
  if (calculate(a, b) === calculate(c,d))
      return 1;
  if (calculate(a, c) === calculate(b, d))
      return 1;
  if (calculate(a, d) === calculate(b,c))
      return 1;
  return 0;
}