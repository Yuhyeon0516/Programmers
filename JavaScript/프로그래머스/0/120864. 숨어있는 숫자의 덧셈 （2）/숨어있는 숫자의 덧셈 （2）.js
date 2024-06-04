function solution(my_string) {
  const numbers = my_string.match(/[0-9]+/g);
  return numbers
    ? numbers
        .map((value) => Number(value))
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    : 0;
}