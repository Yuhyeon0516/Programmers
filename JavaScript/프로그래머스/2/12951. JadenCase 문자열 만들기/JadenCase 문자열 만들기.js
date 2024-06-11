function solution(s) {
  let answer = [];
  let tempWord = "";
  const splitedS = s.toLowerCase().split("");
  for (let word of splitedS) {
    if (!tempWord.length) tempWord += word.toUpperCase();
    else tempWord += word;

    if (word === " ") {
      answer.push(tempWord);
      tempWord = "";
    }
  }
  if (tempWord) {
    answer.push(tempWord);
  }

  return answer.join("");
}