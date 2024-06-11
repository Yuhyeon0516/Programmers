function solution(bandage, health, attacks) {
  let answer = health;
  let healTime = 1;
  let curTime = 1;
  const [t, x, y] = bandage;

  while (attacks.length) {
    if (attacks[0][0] === curTime) {
      answer -= attacks[0][1];
      if (answer <= 0) return -1;
      attacks.shift();
      healTime = 0;
    } else {
      answer += x;
      if (healTime % t === 0) {
        answer += y;
        healTime = 0;
      }
      if (answer > health) answer = health;
    }
    healTime++;
    curTime++;
  }
  return answer > 0 ? answer : -1;
}