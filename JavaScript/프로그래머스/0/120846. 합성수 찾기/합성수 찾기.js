function isCompositionNumber(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (count >= 3) return true;
    if (n % i === 0) {
      count++;
    }
  }

  return count >= 3 ? true : false;
}

function solution(n) {
  var answer = 0;
  for (let i = 4; i <= n; i++) {
    if (isCompositionNumber(i)) {
      answer++;
    }
  }
  return answer;
}