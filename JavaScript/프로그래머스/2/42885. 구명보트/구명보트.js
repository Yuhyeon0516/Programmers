function solution(people, limit) {
  people.sort((a, b) => a - b);
  let answer = 0;
  while (people.length > 1) {
    if (people.at(-1) + people[0] > limit) {
      people.pop();
      answer++;
    } else {
      people.pop();
      people.shift();
      answer++;
    }
  }
  return answer + people.length;
}