function solution(numlist, n) {
  const sortedNumList = numlist.sort((a, b) => {
    if (Math.abs(a - n) === Math.abs(b - n)) {
      return b - a;
    }

    return Math.abs(a - n) - Math.abs(b - n);
  });

  return sortedNumList;
}