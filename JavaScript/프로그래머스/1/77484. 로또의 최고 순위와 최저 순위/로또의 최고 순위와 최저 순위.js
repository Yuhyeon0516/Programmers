function getRank(count) {
  switch (count) {
    case 6:
      return 1;
    case 5:
      return 2;
    case 4:
      return 3;
    case 3:
      return 4;
    case 2:
      return 5;

    default:
      return 6;
  }
}

function solution(lottos, win_nums) {
  const zeroNumberCount = lottos.filter((value) => !value).length;
  const ableSeeLottos = lottos.filter((value) => value);
  const matchingCount = ableSeeLottos.filter((value) =>
    win_nums.includes(value)
  ).length;
  return [getRank(matchingCount + zeroNumberCount), getRank(matchingCount)];
}