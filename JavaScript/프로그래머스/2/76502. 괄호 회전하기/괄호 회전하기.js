function solution(s) {
  let answer = 0;

  for (let i = 0; i < s.length; i++) {
    let shiftS = s.slice(i) + s.slice(0, i);
    let stack = [];

    for (let word of shiftS) {
      let lastStackItem = stack.at(-1);
      if (
        (lastStackItem === "[" && word === "]") ||
        (lastStackItem === "{" && word === "}") ||
        (lastStackItem === "(" && word === ")")
      )
        stack.pop();
      else stack.push(word);
    }

    if (stack.length === 0) answer++;
  }
  return answer;
}