function solution(numbers) {
  let answer = [];
  let stack = [];

  while (numbers.length) {
    const stackLength = stack.length;
    if (!stackLength) {
      answer.push(-1);
      stack.push(numbers.pop());
    } else {
      if (stack[stackLength - 1] > numbers[numbers.length - 1]) {
        answer.push(stack[stackLength - 1]);
        stack.push(numbers.pop());
      } else {
        stack.pop();
      }
    }
  }

  return answer.reverse();
}