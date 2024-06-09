function solution(babbling) {
  let answer = 0;
  const enableBabbling = ["aya", "ye", "woo", "ma"];
  for (let babble of babbling) {
    for (let j = 0; j < 4; j++) {
      if (babble.includes(enableBabbling[j].repeat(2))) break;
      babble = babble.replaceAll(enableBabbling[j], " ");
    }

    if (!babble.replaceAll(" ", "")) answer++;
  }
  return answer;
}