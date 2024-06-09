function solution(keymap, targets) {
  let answer = [];
  for (let target of targets) {
    let count = 0;
    for (let word of target) {
      const mappedKeymap = keymap
        .map((value) => value.indexOf(word))
        .filter((value) => value >= 0);
      const result = Math.min(...mappedKeymap);
      if (result === Infinity) {
        count = -1;
        break;
      }
      count += result + 1;
    }
    answer.push(count);
  }
  return answer;
}