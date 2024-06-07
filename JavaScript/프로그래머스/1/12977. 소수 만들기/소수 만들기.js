function isPrimeNumber(number) {
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function solution(nums) {
  let answer = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const number = nums[i] + nums[j] + nums[k];
        if (isPrimeNumber(number)) answer.push(number);
      }
    }
  }
  return answer.length;
}