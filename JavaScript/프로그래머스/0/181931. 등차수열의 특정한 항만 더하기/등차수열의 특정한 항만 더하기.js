function solution(a, d, included) {
  return included.reduce((accumulator, currentValue, currentIndex) => {
    if (currentValue) {
      return accumulator + (a + d * currentIndex);
    }
    return accumulator;
  }, 0);
}