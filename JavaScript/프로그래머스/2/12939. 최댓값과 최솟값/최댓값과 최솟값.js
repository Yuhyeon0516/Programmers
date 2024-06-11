function solution(s) {
  const splitedS = s.split(" ").map((value) => Number(value));
  return `${Math.min(...splitedS)} ${Math.max(...splitedS)}`;
}