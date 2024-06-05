function solution(my_string, num1, num2) {
  const splitedMyString = my_string.split("");
  return [
    ...splitedMyString.slice(0, num1),
    splitedMyString[num2],
    ...splitedMyString.slice(num1 + 1, num2),
    splitedMyString[num1],
    ...splitedMyString.slice(num2 + 1),
  ].join("");
}