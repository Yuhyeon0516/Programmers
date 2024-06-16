function solution(priorities, location) {
  let answer = 0;
  while (1) {
    const process = priorities.shift();
    if (location === 0) {
      if (priorities.some((value) => value > process)) {
        priorities.push(process);
        location = priorities.length - 1;
      } else {
        return answer + 1;
      }
    } else {
      location--;
      if (priorities.some((value) => value > process)) {
        priorities.push(process);
      } else {
        answer++;
      }
    }
  }
}