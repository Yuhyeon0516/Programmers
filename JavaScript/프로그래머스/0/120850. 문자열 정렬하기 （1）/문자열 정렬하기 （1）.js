function solution(my_string) {
  return [...my_string]
    .map((value) => {
      if (!isNaN(Number(value))) {
        return Number(value);
      }
      return undefined;
    })
    .filter((value) => value !== undefined)
    .sort((a, b) => a - b);
}