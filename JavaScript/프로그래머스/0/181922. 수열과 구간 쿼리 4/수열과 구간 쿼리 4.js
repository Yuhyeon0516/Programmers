function solution(arr, queries) {
  return queries.reduce((accumulator, currentValue) => {
    const copyArr = [...accumulator];
    const [s, e, k] = currentValue;
    return copyArr.map((value, index) => {
      if (index >= s && index <= e) {
        if (index % k === 0) return value + 1;
      }
      return value;
    });
  }, arr);
}