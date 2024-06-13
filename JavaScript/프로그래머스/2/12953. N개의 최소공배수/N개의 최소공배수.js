function solution(arr) {
  arr.sort((a, b) => a - b);
  const arrLength = arr.length;
  const lastNumber = arr[arrLength - 1];
  while (!arr.every((value) => arr[arrLength - 1] % value === 0)) {
    arr[arrLength - 1] += lastNumber;
  }
  return arr.at(-1);
}