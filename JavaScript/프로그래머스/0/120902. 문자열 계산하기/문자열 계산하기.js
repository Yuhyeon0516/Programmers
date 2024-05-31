function solution(my_string) {
  let operator = "+";
  let answer = 0;
  for (let splitedString of my_string.split(" ")) {
    switch (splitedString) {
      case "+":
        operator = "+";
        break;

      case "-":
        operator = "-";

        break;

      default:
        if (operator === "+") {
          answer += Number(splitedString);
        } else {
          answer -= Number(splitedString);
        }
        break;
    }
  }
  return answer;
}