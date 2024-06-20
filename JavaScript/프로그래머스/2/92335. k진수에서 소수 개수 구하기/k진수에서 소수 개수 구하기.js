function isPrimeNumber(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(n, k) {
  var answer = 0;
  const stringNum = n.toString(k);
  const stringNumArr = stringNum.split("0");

  for (let i = 0; i < stringNumArr.length; i++) {
    if (isPrimeNumber(Number(stringNumArr[i]))) answer++;
  }

  return answer;
}