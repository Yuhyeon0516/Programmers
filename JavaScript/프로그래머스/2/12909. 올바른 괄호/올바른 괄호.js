function solution(s) {
  let stack = [];

  for (let word of s) {
    if (stack.at(-1) === "(" && word === ")") stack.pop();
    else {
      stack.push(word);
    }
  }

  return stack.length ? false : true;
}