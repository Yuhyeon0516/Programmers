function solution(numbers) {
  const numbersArray = [
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

  for (let i = 0; i < numbersArray.length; i++) {
    numbers = numbers.split(numbersArray[i]).join(i);
  }

  return Number(numbers);
}