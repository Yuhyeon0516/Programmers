function solution(n, lost, reserve) {
  // 여벌없이 진짜 잃어버린 사람
  const lostWithoutReserve = lost
    .filter((value) => !reserve.includes(value))
    .sort((a, b) => a - b);
  // 잃어버리지 않고 여분이 있는 사람
  const reserveWithoutLost = reserve
    .filter((value) => !lost.includes(value))
    .sort((a, b) => a - b);
  const lostWithoutReserveLength = lostWithoutReserve.length;
  // 체육복을 입을 수 있는 사람 수
  let answer = n - lostWithoutReserveLength;
  for (let i = 0; i < lostWithoutReserveLength; i++) {
    // 잃어버린 사람 양옆에 사람이 여분이 있는지 확인
    const beforeIndex = reserveWithoutLost.indexOf(lostWithoutReserve[i] - 1);
    const afterIndex = reserveWithoutLost.indexOf(lostWithoutReserve[i] + 1);
    if (beforeIndex > -1) {
      // 빌려줬으니 -1로 만들어서 다시는 못찾게 함
      reserveWithoutLost[beforeIndex] = -1;
      answer++;
    } else if (afterIndex > -1) {
      reserveWithoutLost[afterIndex] = -1;
      answer++;
    }
  }

  return answer;
}