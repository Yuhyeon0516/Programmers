function solution(s) {
  const numberList = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = s;
  numberList.forEach((value, index) => {
    answer = answer.replaceAll(value, String(index));
  });
  return Number(answer);
}