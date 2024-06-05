function solution(num, k) {
  const stringNum = String(num);
  for (let i = 0; i < stringNum.length; i++) {
    if (stringNum[i] === String(k)) {
      return i + 1;
    }
  }
  return -1;
}