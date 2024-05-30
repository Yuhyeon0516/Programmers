function solution(quiz) {
  var answer = [];
  for (let i = 0; i < quiz.length; i++) {
    const splitedQuiz = quiz[i].split(" ");
    let result = 0;
    let operator = "+";
    for (let j = 0; j < splitedQuiz.length; j++) {
      switch (splitedQuiz[j]) {
        case "+":
          operator = "+";
          break;
        case "-":
          operator = "-";

          break;
        case "=":
          answer.push(result === Number(splitedQuiz.at(-1)) ? "O" : "X");
          break;

        default:
          if (operator === "+") {
            result += Number(splitedQuiz[j]);
          } else {
            result -= Number(splitedQuiz[j]);
          }
          break;
      }
    }
  }
  return answer;
}