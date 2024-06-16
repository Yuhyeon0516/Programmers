function solution(progresses, speeds) {
  let answer = [];
  while (progresses.length) {
    const day = Math.ceil((100 - progresses[0]) / speeds[0]);
    let result = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i] * day;
    }

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] >= 100) {
        progresses.shift();
        speeds.shift();
        result++;
        i--;
      } else break;
    }

    if (result) answer.push(result);
  }
  return answer;
}